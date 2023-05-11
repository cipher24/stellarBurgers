import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from 'react';
import styles from './app.module.css';

function App() {
  const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });


  useEffect(() => {
  
    const startFetch = async () => {

      setState({...state, hasError: false, isLoading: true}); 

      fetch(API_URL)
        .then(response => {
            if (response.ok) {
              return response.json()
            } else {
              return Promise.reject()
            }
        })
        .then(data => setState({...state, data: data.data, hasError:false, isLoading: false}))
        .catch(e => {
          console.log("ОШИБКА!", e );
          setState({...state, hasError: true, isLoading: false});
        })
        

      }
    
    startFetch();
  },[API_URL])

  const { data } = state;
  return (
    <>
      <AppHeader />
      <main className={styles.main} >
            {data.length > 0 && <BurgerIngredients loadedData={data} /> }
           {data.length > 0 && <BurgerConstructor loadedData={data} />}    
      </main>
    </>
  );
}

export default App;
