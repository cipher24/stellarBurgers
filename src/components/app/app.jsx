import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import React, { useState, useEffect} from 'react';
import styles from './app.module.css';
import {getIngredients} from '../utils/burger-api';
import { DataContext } from '../utils/data-context';

function App() {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
    setState({ ...state, hasError: false, isLoading: true });

    getIngredients()
      .then(data => setState({ ...state, data: data, hasError: false, isLoading: false }))
      .catch(e => {
        console.log("ОШИБКА!", e);
        setState({ ...state, hasError: true, isLoading: false });
      })

  }, [])

  const dataContextValue = React.useMemo(() => {
    return {context:state, setContext:setState};
  }, [state, setState]);

  // const { data } = state;
  return (
    <>
      <AppHeader />
      <main className={styles.main} >
        {
          state.data.length > 0 &&
            <DataContext.Provider value={dataContextValue} >
              <BurgerIngredients />
              <BurgerConstructor />
            </DataContext.Provider>
        }
      </main>
    </>
  );
}

export default App;
