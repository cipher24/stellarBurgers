import styles from './feed-order.module.css';
import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../utils/hooks';
import { CalculatePrice, STATUS } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from '../../utils/hooks';
import { requestOrder } from '../../services/actions/show-order';

export const FeedOrder = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(requestOrder(id as unknown as string))
  }, [])

  const { data } = useSelector(store => store.showOrderReducer);
  const order = data?.orders[0];
  const price = CalculatePrice(order?.ingredients);
  const { ingredients } = useSelector(store => store.burgerIngredientsReducer);

  return (
    <>
      {order && <div className={`${styles.main} text text_type_main-default`}>
        <div className={`${styles.number}text text_type_digits-default`}>{`#${id}`}</div>
        <div className={`text text_type_main-medium mt-10 mb-3`}>{order.name}</div>
        <div className={` ${styles.status} text text_type_main-default`}>{STATUS[order.status as keyof typeof STATUS]}</div>
        <p className={`text text_type_main-medium mt-15 mb-6`}>Состав:</p>

        <div className={`${styles.ingredients}`}>
          {order.ingredients.map((element: string, index: number) => {
            let out = ingredients?.find((el) => el._id === element);
            return (
              <div key={index} className={`${styles.flex} mr-6 mb-4`}>

                <div className={styles.container}>
                  <img className={styles.picture} src={out?.image_mobile}></img>
                </div>
                <div className={`${styles.flexName} mr-4 ml-4`}>{out?.name}</div>
                <div className={styles.currency}>
                  <span className='mr-2'>1 x {out?.price}</span>
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