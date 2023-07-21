import styles from './feed.module.css';
import { OrderCard } from '../components/order-card/order-card';
import { ReactNode, useEffect } from 'react';
import { feedWSConnect, FEED_WS_CONNECT, FEED_WS_DISCONNECT } from '../services/actions/socket';
import { useDispatch, useSelector } from '../utils/hooks';
import { TWSOrder } from '../utils/types';
//'wss://norma.nomoreparties.space/orders/all'
export function FeedPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feedWSConnect('wss://norma.nomoreparties.space/orders/all'))
    return () => {
      dispatch({ type: FEED_WS_DISCONNECT });
    }
  }, [dispatch]);

/*   useEffect(() => {

  }, []) */
  const { data } = useSelector(store => store.socketReducer);
  /* let doneOrders = [[],[],[],[],[]];
  data.forEach((order: TWSOrder) => {
    if (order.status === 'done') {

    } 
  })*/
  // let doneOrders, notReadyOrders;
  /* if (data.orders) {
    doneOrders = data.orders.filter((order: TWSOrder) => order.status === 'done');
    notReadyOrders = data.orders.filter((order: TWSOrder) => order.status !== 'done');
  } */
  return (
    <>
      {data && <div className={`text mb-6 ${styles.main}`}>
        <span className={`text text_type_main-large`}>Лента Заказов</span>

        <div className={`${styles.flexRow} mt-6`}>

          <div className={`${styles.orderList} ${styles.scroll} mr-15`}>

            {data.orders &&
              data.orders.map((order: TWSOrder) => (
                <OrderCard key={order._id} order={order} />
              ))
            }
          </div>

          <div className={`text text_type_main-large ${styles.ordersInfo} ${styles.flexColumn} `}>
            <div className={`mb-15 ${styles.flexRow}`}>

              <div className={`mr-9 ${styles.orderNumbers}`}>Готовы:
                <div className={`mt-6 ${styles.doneOrdersContainer}`}>
                  {data.orders &&
                    data.orders.map((order: TWSOrder) => {
                      if (order.status === 'done') {
                        return (
                          <p key={order._id} className={`${styles.doneOrders} text text_type_digits-default mb-2`}>
                            {order.number}
                          </p>)
                      }
                    })
                  }
                </div>
              </div>
              <div className="">В работе:
                <div className={` mt-6`}>
                  {data.orders &&
                    data.orders.map((order: TWSOrder) => {
                      if (order.status !== 'done') {
                        return (
                          <p key={order._id} className={`${styles.workingOrders} text text_type_digits-default mb-2`}>
                            {order.number}
                          </p>)
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div className='mb-15'>Выполнено за всё время:
              <p className='text_type_digits-large'>{data.total}</p>
            </div>
            <div className="">Выполнено за сегодня:
              <p className='text_type_digits-large'>{data.totalToday}</p>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}