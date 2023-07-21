import { FormattedDate, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './order-card.module.css';
import { OrderPictures } from "../order-pictures/order-pictures";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { CalculatePrice } from "../../utils/utils";
import { FC } from "react";
import { TWSOrder } from '../../utils/types';
import { STATUS } from '../../utils/utils';
type TOrderCard = {
  key: string;
  order: TWSOrder;
}
export const OrderCard: FC<TOrderCard> = (props) => {
  const { order } = props;

  const price = CalculatePrice(order.ingredients);
  const location = useLocation();
  return (
    <Link
      to={{
        pathname: `${order.number}`
      }}
      state={{ background: location }}
      className={styles.noStyle}
    >
      <div className={`${styles.container} p-6 mb-4`}>
        <div className={`${styles.flexRow} `}>
          <span className='text text_type_digits-default'>
            {order.number}
          </span>
          <span className={`${styles.date} text text_type_main-default`}>
            <FormattedDate date={new Date(order.createdAt)} />
          </span>
        </div>
        <div className='text text_type_main-medium mt-6'>
          {order.name}
        </div>
        {(location.pathname === '/profile/orders') &&
          <div className={`${order.status === 'done' ? styles.statusDone : styles.statusNormal} text text_type_main-default mt-2`}>
            {STATUS[order.status as keyof typeof STATUS]}
          </div>
        }
        <div className={`ingredients ${styles.flexRow} pl-5 mt-6`}>
          <div className={`${styles.flexRow}`}>
            <OrderPictures array={order.ingredients} />
          </div>
          <div className={`${styles.flexRow} mr-6`}>
            <span className='text text_type_digits-default mr-2'>{price}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </Link>
  )
}