import styles from './burger-ingredient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import propTypesData from '../utils/prop-types';

const BurgerIngredient = ({ element, showIngredientInfo }) => {
  return (
    <li className={styles.ingredientCard} data-id={element._id} onClick={showIngredientInfo} >
      <img src={element.image} alt="bun image" />
      <div className={`${styles.priceInfo} mt-1 mb-1 text text_type_main-default`}>
        <span className='mr-1'>{element.price}</span>
        <CurrencyIcon />
      </div>
      <p className={styles.ingredientName}> {element.name}</p>
      <span className={`${styles.countIngredient} text text_type_digits-default`}>1</span>
    </li>
  )
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  element: propTypesData.isRequired,
  showIngredientInfo: PropTypes.func.isRequired
}