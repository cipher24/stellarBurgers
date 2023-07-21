import styles from './ingredient-details.module.css';
import { useSelector } from '../../utils/hooks';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IElement } from '../../utils/types';

export const IngredientDetails = () => {

  const [ingredientToShow, setIngredientToShow] = useState<IElement | null | undefined>(null);
  const { ingredient } = useSelector((store) => store.ingredientDetailsReducer);
  const { ingredients } = useSelector((store) => store.burgerIngredientsReducer);
  const { id } = useParams();

  useEffect(() => {
    if (ingredient) {
      setIngredientToShow(ingredient);
    } else {
      let requiredIngredient = ingredients.find((element: IElement) => element._id === id);
      console.log(requiredIngredient);
      if (requiredIngredient) {
        setIngredientToShow(requiredIngredient);
      }
    }
  }, [ingredients, ingredient])

  return (<>
    {ingredientToShow &&
      <div className={styles.ingredientCard}>
        <img src={`${ingredientToShow.image_large}`} alt={`изображение ${ingredientToShow.name}`}></img>
        <p className={`mt-4 mb-8 text text_type_main-medium`}>{ingredientToShow.name}</p>
        <div className={`${styles.nutrition} text text_type_main-default text_color_inactive mb-15`}>
          <div>
            <p>Калории,ккал</p>
            <p className='text_type_digits-default'>{ingredientToShow.calories}</p>
          </div>
          <div>
            <p>Белки, г</p>
            <p className={`${styles.text} text_type_digits-default`}>{ingredientToShow.proteins}</p>
          </div>
          <div>
            <p>Жиры, г</p>
            <p className='text_type_digits-default'>{ingredientToShow.fat}</p>
          </div>
          <div>
            <p>Углеводы, г</p>
            <p className='text_type_digits-default'>{ingredientToShow.carbohydrates}</p>
          </div>
        </div>
      </div>
    }
  </>
  )
}
