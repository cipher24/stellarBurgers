import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IElement } from '../../utils/types';

export const IngredientDetails = () => {

  const [ingredient, setIngredient] = useState<IElement | null>(null);
  const checkIngredient = useSelector((store: any) => store.ingredientDetailsReducer);
  const { ingredients } = useSelector((store: any) => store.burgerIngredientsReducer);
  const { id } = useParams();
  useEffect(() => {
    if (checkIngredient.name === '') {
      const out = ingredients.find((element: IElement) => element._id === id);
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
