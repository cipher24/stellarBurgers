import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { useSelector } from '../../utils/hooks';
import styles from './category-ingredients.module.css';
import { FC, useMemo } from 'react';
import { IElementTemp } from '../../utils/types';
import { burgerConstructor, burgerIngredients } from '../../selectors/selectors';

type TCategory = {
  type: string;
  title: string;
}
const CategoryIngredients: FC<{ category: TCategory }> = ({ category }) => {
  const { ingredients } = useSelector(burgerIngredients);
  const constructorIngredients = useSelector(burgerConstructor);

  const ingredientCounters = useMemo(() => {
    const { buns, ingredients } = constructorIngredients;
    const counters: { [name: string]: number } = {};

    ingredients.forEach((element) => {
      if (!counters[element._id]) counters[element._id] = 0;
      counters[element._id]++;
    });
    if (buns) counters[buns._id] = 2;
    return counters;
  }, [constructorIngredients]);

  return (
    <>
      <h3 className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id={category.type}> {category.title} </h3>
      <ul className={styles.list} data-cy={category.type}>

        {
          ingredients
            .filter((element: IElementTemp) => element.type === category.type)
            .map((element: IElementTemp) => {
              return <BurgerIngredient key={element._id} element={element} count={ingredientCounters[element._id]} />
            })
        }
      </ul>
    </>
  )
}
export default CategoryIngredients;
