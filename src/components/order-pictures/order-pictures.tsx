import { FC } from 'react';
import { burgerIngredients } from '../../selectors/selectors';
import { useSelector } from '../../utils/hooks';
import styles from './order-pictures.module.css';

type TOrderPicturesProps = { array: string[] };

export const OrderPictures: FC<TOrderPicturesProps> = ({ array }) => {
  const { ingredients } = useSelector(burgerIngredients);
  let i = 0;
  return (
    <>
      {array.map((element: string, index) => {
        if (index < 6) {
          let zIndex = 20 - index;
          let out = ingredients.find((ingredient) => (ingredient._id === element));
          if (index !== 5) {
            
            return (
              <div key={i++} style={{zIndex: zIndex}}className={styles.pictureContainer}>
                <div className={styles.background}>
                  <img className={styles.picture}
                    src={out?.image_mobile}
                    alt={out?.name}
                  ></img>
                </div>
              </div>
            )
          }else {
            return (
              <div key={i++} className={styles.pictureContainer}>
                <div className={styles.background}>
                  <img className={styles.pictureTransparent}
                    src={out?.image_mobile}
                    alt={out?.name}
                  ></img>
                  <span className={`${styles.count} text text_type_digits-default`}>{`+${array.length-5}`}</span>
                </div>
              </div>
            )
          }
        }
      })}
    </>
  )
}