import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon, DeleteIcon, DragIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import React from 'react';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import propTypesData from '../utils/prop-types';

function BurgerConstructor(props) {
  const [isShowOrder, setIsShowOrder] = React.useState(false);

  const datas = props.loadedData;

  const mains = React.useMemo(() => datas.filter((element) => element.type === 'main'), [datas]);

  const onCloseClick = () => {
    setIsShowOrder(false);
  }
  const onOrderButtonClick = () => {
    setIsShowOrder(true);
  }

  return (
    <section className={`${styles.constructorBlock} text text_type_main-default`}>

      <ul className={`${styles.list} mt-25 mb-10 ml-4 mr-4`}>

        <li className={styles.flexLi} >
          <div className={` ${styles.firstLi} pl-6 pr-8`}>
            <img className={styles.constructorImage} src={datas[0].image_mobile}></img>
            <p>{`${datas[0].name} (верх)`}</p>
            <p className={styles.priceInfo}>
              <span className="mr-1">{datas[0].price}</span>
              <CurrencyIcon />
            </p>
            <LockIcon type="secondary" />
          </div>
        </li>

        <div className={`${styles.constructorScroll} pr-1`}>
          {mains.map((element, index) => (
            element.type === "main" &&
            <li key={index} className={styles.constructorLi}>
              <DragIcon />
              <div className={` ${styles.constructorPiece} ml-1`}>
                <img className={`${styles.constructorImage}`} src={element.image_mobile}></img>
                <p>{element.name}</p>
                <p className={styles.priceInfo}>
                  <span className="mr-1">{element.price}</span>
                  <CurrencyIcon />
                </p>
                <DeleteIcon className='mr-8' />
              </div>
            </li>
          ))}
        </div>

        <li className={`${styles.flexLi} mt-4`} >
          <div className={` ${styles.lastLi} pl-6 pr-8`}>
            <img className={styles.constructorImage} src={datas[0].image_mobile}></img>
            <p>{`${datas[0].name} (низ)`}</p>
            <p className={styles.priceInfo}>
              <span className="mr-1">{datas[0].price}</span>
              <CurrencyIcon />
            </p>
            <LockIcon type="secondary" />
          </div>
        </li>

      </ul>

      <form className={styles.confirmOrder}>
        <p className='text text_type_digits-medium mr-10'> <span>610</span> <CurrencyIcon /></p>
        <Button htmlType="button" type="primary" size="medium" onClick={onOrderButtonClick}>
          Оформить заказ
        </Button>
      </form>
      <div className={styles.modalContainer}>
        {
          isShowOrder &&
          <Modal onCloseClick={onCloseClick} >
            <OrderDetails orderNumber={123456} />
          </Modal>
        }
      </div>
    </section>
  )
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  loadedData: PropTypes.arrayOf(propTypesData.isRequired).isRequired
}