import styles from './burger-constructor.module.css'
import { Button, CurrencyIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useSelector, useDispatch } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import { requestServer, closeOrder } from '../../services/actions/order-details';
import { v4 as uuidv4 } from 'uuid';
import { useDrop } from 'react-dnd';
import { ADD_INGREDIENT, ADD_BUNS } from '../../services/actions/burger-constructor';
import ConstructorPiece from '../constructor-piece/constructor-piece';
import { IElement } from '../../utils/types';
import { burgerConstructor, orderDetails } from '../../selectors/selectors';
import { useMemo } from 'react';

type TUseDropProps = { element: IElement };
type TIsDraggingProps = { isDragging: boolean };

export default function BurgerConstructor() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isShowOrder } = useSelector(orderDetails);
  const states = useSelector(burgerConstructor);

  const [{ isDragging }, dropTargetRef] = useDrop<TUseDropProps, void, TIsDraggingProps>({
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

  const onCloseClick = () => {
    dispatch(closeOrder());
  }
  //useCallback ? нужен c добавлением диспатч в депс ?
  const onOrderButtonClick = (): void => {
    if (!localStorage.getItem('refreshToken')) {
      navigate('/login', { state: { from: "/" } })
    } else if (states?.buns?.name !== undefined) {
      dispatch(requestServer(getIngredientsIds()));
    } else { window.alert('Добавьте булку, чтобы завершить заказ'); }
  }


  //сбор ингредиентов для бургера
  const getIngredientsIds = (): { ingredients: Array<string> } => {
    const ids = [];
    if (states && states.buns) {
      ids.push(states.buns._id);
    }
    states.ingredients.forEach((element: IElement) => ids.push(element._id));
    if (states && states.buns) {
      ids.push(states.buns._id);
    }
    return { ingredients: ids };
  }
  const total = useMemo(() => {
    return ((states.buns ? states.buns.price * 2 : 0) +
      states.ingredients.reduce((acc, cur) => acc + cur.price, 0))
  }, [states]);

  return (
    <section className={` ${styles.constructorBlock} text text_type_main-default`}>

      <ul
        ref={dropTargetRef}
        className={`${isDragging ? styles.dropZone : ''} ${styles.list} mt-25 mb-10 ml-4`}
        data-cy="constructor"
      >

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {states.buns &&
            <li key={'00'} data-cy="constructor-bun-1">
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${states.buns.name} (верх)`}
                price={states.buns.price}
                thumbnail={states.buns.image_mobile}
                extraClass={styles.buns}
              />
            </li>
          }

          {states.ingredients &&
            <div
              className={`${styles.constructorScroll}`}
              data-cy="constructor-ingredient"
            >
              {states.ingredients.map((element: IElement, index: number) => (
                <ConstructorPiece
                  element={element}
                  key={element.dragId}
                  index={index}
                />
              ))}
            </div>
          }

          {states.buns &&
            <li key={'01'} data-cy="constructor-bun-2">
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${states.buns.name} (низ)`}
                price={states.buns.price}
                thumbnail={states.buns.image_mobile}
                extraClass={`${styles.buns} ${styles.bottomBun}`}
              />
            </li>
          }
        </div>

      </ul>

      <div className={styles.confirmOrder} >
        <p className='text text_type_digits-medium mr-10'><span>{total}</span> <CurrencyIcon type="primary" /></p>
        <Button htmlType="button" type="primary" size="medium" onClick={onOrderButtonClick} aria-label="Оформить заказ">
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
