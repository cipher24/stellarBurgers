import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { useSelector } from 'react-redux';
import styles from './category-ingredients.module.css';


export default function CategoryIngredients ({category}) {
  const ingredients = useSelector(store=>store.burgerIngredientsReducer.ingredients);

  return (
    <>
      <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id={category.type}> {category.title} </p>
      <ul className={styles.list}>
ssdf
          {/* <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/> */}
        {
          /* sauces.map((element) => {
            return <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/>
          }) */
        }
      </ul>
    </>
  )
}