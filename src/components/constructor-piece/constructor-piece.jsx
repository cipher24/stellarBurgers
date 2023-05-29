import styles from './constructor-piece.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import propTypesData from '../../utils/prop-types';
import PropTypes from 'prop-types';
import { useDrop, useDrag } from 'react-dnd';
import { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_INGREDIENT, UPDATE_INGREDIENTS_ORDER } from '../../services/actions/burger-constructor';

export default function ConstructorPiece({ element, index }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.burgerConstructorReducer.ingredients);

  const swapIngredient = useCallback((dragIndex, hoverIndex) => {
    const dragIngredient = ingredients[dragIndex];
    const newOrder = [...ingredients];
    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragIngredient)

    dispatch({
      type: UPDATE_INGREDIENTS_ORDER,
      payload: newOrder
    })
  }, [ingredients, dispatch]);

  const deleteIngredient = useCallback((index, element) => {
    const newOrder = [...ingredients];
    newOrder.splice(index, 1);

    dispatch({
      type: DELETE_INGREDIENT,
      payload: newOrder,
      item: element
    })
  }, [ingredients, dispatch]);

  const [, drop] = useDrop({
    accept: 'item',

    hover(element, monitor) {

      if (!ref.current) {
        return;
      }
      if (element.index === index) {
        return;
      }

      const hoverBounding = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBounding.bottom - hoverBounding.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBounding.top;

      if ((element.index > index) && (hoverClientY > hoverMiddleY)) {
        return;
      }
      if ((element.index < index) && (hoverClientY < hoverMiddleY)) {
        return;
      }

      swapIngredient(element.index, index);
      element.index = index;
    }
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: () => ({ id: element.id, index }),
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
      <DragIcon />
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


ConstructorPiece.propTypes = {
  element: propTypesData.isRequired,
  index: PropTypes.number.isRequired,
} 