import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { useSelector } from 'react-redux';
import styles from './category-ingredients.module.css';
import PropTypes from 'prop-types';

export default function CategoryIngredients ({category}) {
  const ingredients = useSelector(store=>store.burgerIngredientsReducer.ingredients);

  return (
    <>
      <h3 className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id={category.type}> {category.title} </h3>
      <ul className={styles.list}>

        {
          ingredients
          .filter(element => element.type === category.type)
          .map((element) => {
            return <BurgerIngredient key={element._id} element={element} />
          })
        }
      </ul>
    </>
  )
}

CategoryIngredients.propTypes = {
  category: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired  
  }).isRequired
}