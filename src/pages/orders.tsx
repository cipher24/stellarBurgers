import { useEffect } from 'react';
import { OrderCard } from '../components/order-card/order-card';
import { useDispatch, useSelector } from '../utils/hooks';
import { historyWSConnect, HISTORY_WS_DISCONNECT } from '../services/actions/socket';
import styles from './orders.module.css';
import { getCookie } from '../utils/cookie';
import { WEBSOCKET_URL } from '../utils/burger-api';
import { socket } from '../selectors/selectors';

export function OrdersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(historyWSConnect(`${WEBSOCKET_URL}?token=${getCookie('token')}`))
    return () => {
      dispatch({ type: HISTORY_WS_DISCONNECT });
    }
  }, [dispatch]);
  const { data } = useSelector(socket);
  let reversedOrders;

  if (data) {
    reversedOrders = data?.orders.reverse();
  }
  return (
    <>
      {data && reversedOrders && <div className={`${styles.main}`}>
        {reversedOrders &&
          reversedOrders.map((order) => {
            return (<OrderCard key={order._id} order={order} />)
          })
        }
      </div>}
    </>
  )
}