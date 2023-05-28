import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsRequest } from '../../services/actions/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect } from 'react';

export default function App() {

  const dispatch = useDispatch();
  
   useEffect(() => {
      dispatch(getIngredientsRequest());
   },[dispatch]);

   const data = useSelector(store=>store.burgerIngredientsReducer.ingredients);
   
  return (
    <>
      <AppHeader />
      <main className={styles.main} >
        {data.length > 0 && 
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor /> 
          </DndProvider>
        }
      </main>
    </>
  )
}
