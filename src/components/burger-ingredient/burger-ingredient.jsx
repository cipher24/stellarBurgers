import styles from './burger-ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import propTypesData from '../utils/prop-types';
import React from 'react';
import { getIngredientInfo } from '../../services/actions/ingredient-details';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';

const BurgerIngredient = ({ element }) => {
  //передавать, не элемент, а айди ингредиента, и уже тут достоввать по айди нужный ингредиент из хранилища.
  const dispatch = useDispatch();

  const showIngredientInfo = () => {
    dispatch(getIngredientInfo(element))
  };
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { element },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.3 : 1,
      
    })
  });

  const countInfo = element.count
    ? <span className={`${styles.countIngredient} text text_type_digits-default`}>{element.count}</span>
    : '';

  return (
    <li ref={dragRef} style={{ opacity }} className={styles.ingredientCard} data-id={element._id} onClick={showIngredientInfo} >
      <img src={element.image} alt="image" />
      <div className={`${styles.priceInfo} mt-1 mb-1 text text_type_main-default`}>
        <span className='mr-1'>{element.price}</span>
        <CurrencyIcon />
      </div>
      <p className={styles.ingredientName}> {element.name}</p>
      {countInfo}
    </li>
  )
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  element: propTypesData.isRequired,
}