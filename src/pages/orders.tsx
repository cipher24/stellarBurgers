import { useEffect } from 'react';
import { OrderCard } from '../components/order-card/order-card';
import { useDispatch, useSelector } from '../utils/hooks';
import { historyWSConnect, HISTORY_WS_DISCONNECT } from '../services/actions/socket';
import styles from './orders.module.css';
import { getCookie } from '../utils/cookie';
import { TWSOrder } from '../utils/types';

export function OrdersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(historyWSConnect(`wss://norma.nomoreparties.space/orders?token=${getCookie('token')}`))
    return () => {
      dispatch({ type: HISTORY_WS_DISCONNECT });
    }
  }, [dispatch]);
  const { data } = useSelector(store => store.socketReducer);
  // console.log(data);
  let reversedOrders;
  
  if (data) {
    reversedOrders = data?.orders.reverse();
  }
  // console.log(READY['done']);
  return (
  <>
    {data && <div className={`${styles.main}`}>
      {reversedOrders &&
        reversedOrders.map((order: TWSOrder) => {
          return (<OrderCard key={order._id} order={order} />)
        })
      }
    </div>}
  </>
  )
}