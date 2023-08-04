import styles from './feed-order.module.css';
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../utils/hooks';
import { CalculatePrice, STATUS } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from '../../utils/hooks';
import { requestOrder } from '../../services/actions/request-order';
import { burgerIngredients, requestedOrder} from '../../selectors/selectors';
import { composeIngredients } from '../../utils/utils';
export const FeedOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  //передавать локейшн отсюда?
  useEffect(() => {
    if (id) {
      dispatch(requestOrder(id))
    }
  }, []);
  
  const { answerData } = useSelector(requestedOrder);
  const { ingredients } = useSelector(burgerIngredients);
  const order = answerData?.orders[0];
  const price = CalculatePrice(order?.ingredients);
  return (
    <>
      {order && <div className={`${styles.main} text text_type_main-default`}>
        <div className={`${styles.number}text text_type_digits-default`}>{`#${id}`}</div>
        <div className={`text text_type_main-medium mt-10 mb-3`}>{order.name}</div>
        <div className={` ${styles.status} text text_type_main-default`}>{STATUS[order.status as keyof typeof STATUS]}</div>
        <p className={`text text_type_main-medium mt-15 mb-6`}>Состав:</p>

        <div className={`${styles.ingredients}`}>
          {order && Object.entries(composeIngredients(order.ingredients)).map((element, index) => {
            let out = ingredients?.find((el) => el._id === element[0]);
            return (
              <div key={index} className={`${styles.flex} mr-6 mb-4`}>

                <div className={styles.container}>
                  <img className={styles.picture} src={out?.image_mobile}></img>
                </div>
                <div className={`${styles.flexName} mr-4 ml-4`}>{out?.name}</div>
                <div className={styles.currency}>
                  <span className='mr-2'>{element[1]} x {out?.price}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            )
          })}
        </div>

        <div className={`${styles.flexWithSpace} mt-10 mb-10`}>
          <FormattedDate
            className={`text text_type_main-default text_color_inactive`}
            date={new Date(order.createdAt)}
          />
          <div className={`${styles.align} `}><span className='mr-2'>{price}</span>
            <CurrencyIcon type='primary' />
          </div>
        </div>

      </div>}
    </>
  )
}