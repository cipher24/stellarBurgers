import styles from './ingredient-details.module.css';
import propTypesData from '../utils/prop-types';
import React from 'react';

export const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={styles.ingredientCard}>
      <img src={ingredient.image_large} alt='ingredient photo'></img>
      <p className={`mt-4 mb-8 text text_type_main-medium`}>{ingredient.name}</p>
      <div className={`${styles.nutrition} text text_type_main-default text_color_inactive mb-15`}>
        <div>
          <p>Калории,ккал</p>
          <p className='text_type_digits-default'>{ingredient.calories}</p>
        </div>
        <div>
          <p>Белки, г</p>
          <p className={`${styles.text} text_type_digits-default`}>{ingredient.proteins}</p>
        </div>
        <div>
          <p>Жиры, г</p>
          <p className='text_type_digits-default'>{ingredient.fat}</p>
        </div>
        <div>
          <p>Углеводы, г</p>
          <p className='text_type_digits-default'>{ingredient.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

// export default IngredientDetails;


IngredientDetails.propTypes = {
  ingredient: propTypesData.isRequired
}
