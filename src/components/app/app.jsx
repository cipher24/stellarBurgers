import React from 'react';
// было так но я добавил модуль. Не пропадут ли стили в других местах ?
// import './app.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css'

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main} >
           <BurgerIngredients></BurgerIngredients>
           <BurgerConstructor></BurgerConstructor>
      </main>
    </>
  );
}

export default App;
