import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import React, { useEffect } from 'react';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import propTypesData from '../utils/prop-types';
import ConstructorPiece from '../constructor-piece/constructor-piece';
import { DataContext } from '../utils/data-context';
import { ConstructorContext } from '../utils/constructor-context';
import { requestToServer } from '../utils/burger-api';
import { useSelector } from 'react-redux';

export default function BurgerConstructor() {
/* 
  const {context} = React.useContext(DataContext);
 const datas = context.data; */
 const datas = useSelector(store => store.burgerIngredientsReducer.ingredients); 

  const [isShowOrder, setIsShowOrder] = React.useState(false);
  const [state, setConstructorState] = React.useState({
    upperBun: null,
    lowerBun: null,
    ingredients: [],
    total: null,
    answer: null,
    orderNumber: null
  });

  const buns = React.useMemo(() => datas.filter((element) => element.type === 'bun'), [datas]);
  const notBuns = React.useMemo(() => datas.filter((element) => element.type !== 'bun'), [datas]);

  const randomBun = buns[Math.floor(Math.random() * buns.length)];
  const randomIng = [];
  for (let i = 0; i < 2; i++) {
    randomIng.push(notBuns[Math.floor(Math.random() * notBuns.length)]);
  }

  // Блок генерирующий случайный бургер
  useEffect(() => {
    setConstructorState({
      ...state,
      upperBun: randomBun,
      lowerBun: randomBun,
      ingredients: randomIng,
      total: (randomBun.price * 2) + randomIng.reduce((acc, current) => acc + current.price, 0)
    })
  }, [datas]);

  const onCloseClick = () => {
    setIsShowOrder(false);
  }

  const onOrderButtonClick = (event) => {
    setIsShowOrder(true);
    requestToServer(getIngredientsIds())
    .then((data) => {
      setConstructorState({ ...state, answer: data, orderNumber: data.order.number })
    })
    .catch(e => console.log("! ОШИБКА: ", e));
  }

  const getIngredientsIds = () => {
    const ids = [];
    ids.push(state.upperBun._id);
    ids.push(state.lowerBun._id);
    state.ingredients.forEach((element) => ids.push(element._id));
    return ids;
  }

  return (
    <section className={`${styles.constructorBlock} text text_type_main-default`}>


      <ul className={`${styles.list} mt-25 mb-10 ml-4`}>
        
        {/* Верхняя булка */}
        {state.upperBun &&
          <li className={`${styles.flexBun} ml-8`} key={'00'} >
            <div className={` ${styles.topBun} pl-6 pr-8`} >
              <img className={styles.constructorImage} src={state.upperBun.image_mobile}></img>
              <p>{`${state.upperBun.name} (верх)`}</p>
              <p className={styles.priceInfo}>
                <span className="mr-1">{state.upperBun.price}</span>
                <CurrencyIcon />
              </p>
              <LockIcon type="secondary" />
            </div>
          </li>
        }
        {/* Ингредиенты */}
        {state.ingredients &&
          <div className={`${styles.constructorScroll}`}>
            {state.ingredients.map((element, index) => (
              <ConstructorPiece
                element={element}
                key={index}
              />
            )
            )}
          </div>
        }

        {/* нижняя булка */}
        {state.lowerBun &&
          <li className={`${styles.flexBun} mt-4 ml-8`} key={'01'}>
            <div className={` ${styles.downBun} pl-6 pr-8`} >
              <img className={styles.constructorImage} src={state.lowerBun.image_mobile}></img>
              <p>{`${state.lowerBun.name} (низ)`}</p>
              <p className={styles.priceInfo}>
                <span className="mr-1">{state.lowerBun.price}</span>
                <CurrencyIcon />
              </p>
              <LockIcon type="secondary" />
            </div>
          </li>
        }

      </ul>


      <ConstructorContext.Provider value={state} >
        <div className={styles.confirmOrder} >
          <p className='text text_type_digits-medium mr-10'><span>{state.total}</span> <CurrencyIcon /></p>
          <Button htmlType="button" type="primary" size="medium" onClick={onOrderButtonClick}>
            Оформить заказ
          </Button>
        </div>
        <div className={styles.modalContainer}>
          {isShowOrder &&
            <Modal onCloseClick={onCloseClick} >
              <OrderDetails />
            </Modal>
          }
        </div>
      </ConstructorContext.Provider>
    </section>
  )
}

// export default BurgerConstructor;

/* BurgerConstructor.propTypes = {
  loadedData: PropTypes.arrayOf(propTypesData.isRequired).isRequired
} */