import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const IngredientDetails = () => {

  const [ingredient, setIngredient] = useState(null);
  const location = useLocation();
  const checkIngredient = useSelector(store => store.ingredientDetailsReducer);
  const { ingredients } = useSelector(store => store.burgerIngredientsReducer);
  const ingredientID = location.pathname.split('/ingredients/')[1];
  useEffect(() => {
    if (checkIngredient.name === '') {
      const out = ingredients.find(element => element._id === ingredientID);
      setIngredient(out);
    } else {
      setIngredient(checkIngredient);
    }
  }, [ingredients, checkIngredient])

  return (<>
    {ingredient &&
      <div className={styles.ingredientCard}>
        <img src={`${ingredient.image_large}`} alt={`изображение ${ingredient.name}`}></img>
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
    }
  </>
  )
}
