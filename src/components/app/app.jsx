import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from 'react';
import styles from './app.module.css';
import getIngredients from '../utils/burger-api';

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

  const { data } = state;
  return (
    <>
      <AppHeader />
      <main className={styles.main} >
        {
          data.length > 0 &&
          <>
            <BurgerIngredients loadedData={data} />
            <BurgerConstructor loadedData={data} />
          </>
        }
      </main>
    </>
  );
}

export default App;
