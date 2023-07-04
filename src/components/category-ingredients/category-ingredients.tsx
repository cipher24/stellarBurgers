import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { useSelector } from 'react-redux';
import styles from './category-ingredients.module.css';
import {FC} from 'react';
import {IElement} from '../../utils/types';

type TCategory = {
  type: string;
  title: string;
}
const CategoryIngredients: FC<{category: TCategory}> = ({category}) => {
  const ingredients = useSelector((store:any)=>store.burgerIngredientsReducer.ingredients);

  return (
    <>
      <h3 className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id={category.type}> {category.title} </h3>
      <ul className={styles.list}>

        {
          ingredients
          .filter((element: IElement) => element.type === category.type)
          .map((element:IElement) => {
            return <BurgerIngredient key={element._id} element={element} />
          })
        }
      </ul>
    </>
  )
}
export default CategoryIngredients;
