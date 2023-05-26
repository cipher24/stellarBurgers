import AppHeader from '../app-header/app-header';
// import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
// import { BurgerIngredients } from './burger';

import BurgerConstructor from '../burger-constructor/burger-constructor';
import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import { getIngredients } from '../utils/burger-api';
import { DataContext } from '../utils/data-context';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsRequest } from '../../services/actions/burger-ingredients';

//убрать контекст?
export default function App() {

  /* const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  }); */
  // const dispatch = useDispatch();
  // через экшены 
  /* useEffect(() => {
    setState({ ...state, hasError: false, isLoading: true });

    getIngredients()
      .then(data => setState({ ...state, data: data, hasError: false, isLoading: false }))
      .catch(e => {
        console.log("ОШИБКА!", e);
        setState({ ...state, hasError: true, isLoading: false });
      })

  }, []) */

  /* const dataContextValue = React.useMemo(() => {
    return {context:state, setContext:setState};
  }, [state, setState]); */

  // const { data } = state;
  return (
    <>
      <AppHeader />
      <main className={styles.main} >
        <BurgerIngredients />
        {/* <BurgerConstructor />  */}
      </main>
    </>
  )
}

// export default App;
