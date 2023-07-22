import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-details.module.css';
import { useSelector } from '../../utils/hooks';
import { orderDetails } from '../../selectors/selectors';

const OrderDetails = () => {
  const { orderNumber } = useSelector(orderDetails);

  return (<>
    {orderNumber
      ? (<div className={styles.orderContainer}>
        <h1 className="text text_type_digits-large"> {orderNumber}</h1>
        <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
        <div className={styles.checkIconContainer}>
          <CheckMarkIcon type="primary" />
        </div>
        <p className="text text_type_main-small mt-15 mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
      </div>)
      : (<div className={`${styles.loader} text text_type_main-large`}>Пожалуйста, подождите <p>заказ обрабатывается...</p></div>)}

  </>
  )
}

export default OrderDetails;
