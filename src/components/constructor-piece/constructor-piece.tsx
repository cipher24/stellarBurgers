import styles from './constructor-piece.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop, useDrag } from 'react-dnd';
import { useRef, useCallback, FC } from 'react';
import { useSelector, useDispatch } from '../../utils/hooks';
import { DELETE_INGREDIENT, UPDATE_INGREDIENTS_ORDER } from '../../services/actions/burger-constructor';
import { IElement } from '../../utils/types';
import { burgerConstructor } from '../../selectors/selectors';

type TSwapIngredientCallback = (dragIndex: number, hoverIndex: number) => void;
type TDeleteIngredientCallback = (index: number, element: IElement) => void;
type TDragElement = IElement & { index?: number, dragIndex?: number };
type TUseDragProps = { id: string, index: number };
type TIsDragging = { isDragging: boolean };
type TFunctionProps = { element: TDragElement, index: number };

const ConstructorPiece: FC<TFunctionProps> = ({ element, index }) => {
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useDispatch();
  const { ingredients } = useSelector(burgerConstructor);

  const swapIngredient = useCallback<TSwapIngredientCallback>((dragIndex, hoverIndex) => {
    const dragIngredient = ingredients[dragIndex];
    const newOrder = [...ingredients];
    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragIngredient)

    dispatch({
      type: UPDATE_INGREDIENTS_ORDER,
      payload: newOrder
    })
  }, [ingredients, dispatch]);

  //функции удаления ингредиента из конструктора по нажатию на кнопку корзины рядом с элементом
  const deleteIngredient = useCallback<TDeleteIngredientCallback>((index, element) => {
    const newOrder = [...ingredients];
    newOrder.splice(index, 1);

    dispatch({
      type: DELETE_INGREDIENT,
      payload: newOrder,
      item: element
    })
  }, [ingredients, dispatch]);

  const [, drop] = useDrop<TDragElement, void>({
    accept: 'item',
    hover(element, monitor) {

      if (!ref.current) {
        return;
      }
      const dragIndex = Number(element.index);
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBounding = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBounding.bottom - hoverBounding.top) / 2;
      const clientOffset = monitor.getClientOffset();
      //typeguard
      if (clientOffset) {
        const hoverClientY = clientOffset.y - hoverBounding.top;


        if ((dragIndex > index) && (hoverClientY > hoverMiddleY)) {
          return;
        }
        if ((dragIndex < index) && (hoverClientY < hoverMiddleY)) {
          return;
        }
      }
      swapIngredient(dragIndex, hoverIndex);
      element.index = hoverIndex;
    }
  })

  const [{ isDragging }, drag] = useDrag<TUseDragProps, void, TIsDragging>({
    type: 'item',
    item: () => ({ id: element._id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  if (element.type !== 'bun') drag(drop(ref))

  const deleteClick = () => {
    deleteIngredient(index, element)
  }

  return (

    <li
      ref={ref}
      key={element.dragIndex}
      style={{ opacity }}
      onDrop={(e) => e.preventDefault()}
      className={`${styles.constructorLi} mt-4`}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={`${element.name}`}
        price={element.price}
        thumbnail={element.image_mobile}
        extraClass={styles.ingredient}
        handleClose={deleteClick}
      />
    </li>
  )
}

export default ConstructorPiece;
