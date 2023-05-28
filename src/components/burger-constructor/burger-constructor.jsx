import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useSelector, useDispatch} from 'react-redux';
import { requestServer, closeOrder } from '../../services/actions/order-details';
import { v4 as uuidv4 } from 'uuid';
import { useDrop } from 'react-dnd';
import { ADD_INGREDIENT, ADD_BUNS } from '../../services/actions/burger-constructor';
import ConstructorIngredients from '../constructor-ingredients/constructor-ingredients';

export default function BurgerConstructor() {

 const dispatch = useDispatch();
  const isShowOrder = useSelector(store=>store.orderDetailsReducer.isShowOrder);

  const onCloseClick = () => {
    dispatch(closeOrder());
  }

const [{ isDragging }, dropTargetRef] = useDrop({
  accept: 'ingredient',
  collect: monitor => ({
    isDragging: monitor.canDrop()
  }),
  drop(item) {
    if (item.element.type !== 'bun') {
      dispatch({
        type: ADD_INGREDIENT,
        item: {
          ...item.element,
          dragId: uuidv4(),
        }
      })
    } else {
      dispatch({
        type: ADD_BUNS,
        item: {
          ...item.element,
          dragId: uuidv4(),
        }
      })
    }
  }
});

//useCallback ? нужен c добавлением диспатч в депс ?
  const onOrderButtonClick = () => {
    dispatch(requestServer(getIngredientsIds()));

  }

  const getIngredientsIds = () => {
    const ids = [];
    ids.push(states.buns._id);
    ids.push(states.buns._id);
    states.ingredients.forEach((element) => ids.push(element._id));
    return ids;
  }

  const states = useSelector(store => store.burgerConstructorReducer);
  
  return (
    <section   className={` ${styles.constructorBlock} text text_type_main-default`}>


      <ul ref={dropTargetRef} className={`${isDragging ? styles.dropZone :'' } ${styles.list} mt-25 mb-10 ml-4`}>
        
        {/* Верхняя булка */}
        { states.buns.name !== undefined &&
          <li className={`${styles.flexBun} ml-8`} key={'00'} >
            <div className={` ${styles.topBun} pl-6 pr-8`} >
              <img className={styles.constructorImage} src={states.buns.image_mobile}></img>
              <p>{`${states.buns.name} (верх)`}</p>
              <p className={styles.priceInfo}>
                <span className="mr-1">{states.buns.price}</span>
                <CurrencyIcon />
              </p>
              <LockIcon type="secondary" />
            </div>
          </li>
        }
        {/* Ингредиенты */}
        {states.ingredients &&
          <div className={`${styles.constructorScroll}`}>
            <ConstructorIngredients />
          </div>
        }
        

        {/* нижняя булка */}
        {states.buns.name !== undefined &&
          <li className={`${styles.flexBun} mt-4 ml-8`} key={'01'}>
            <div className={` ${styles.downBun} pl-6 pr-8`} >
              <img className={styles.constructorImage} src={states.buns.image_mobile}></img>
              <p>{`${states.buns.name} (низ)`}</p>
              <p className={styles.priceInfo}>
                <span className="mr-1">{states.buns.price}</span>
                <CurrencyIcon />
              </p>
              <LockIcon type="secondary" />
            </div>
          </li>
        }

      </ul>



        <div className={styles.confirmOrder} >
          <p className='text text_type_digits-medium mr-10'><span>{states.total}</span> <CurrencyIcon /></p>
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
    </section>
  )
}
