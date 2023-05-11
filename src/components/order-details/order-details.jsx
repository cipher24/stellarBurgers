import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './order-details.module.css';
import PropTypes from 'prop-types';

const OrderDetails = ({ orderNumber }) => {
  
  return (
    <div className={styles.orderContainer}>
      <h1 className="text text_type_digits-large"> {orderNumber}</h1>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <div className={styles.checkIconContainer}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-small mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired
}