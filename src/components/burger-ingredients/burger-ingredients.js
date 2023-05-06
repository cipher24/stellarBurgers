import React from 'react';
import {Tab, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import datas from '../utils/data';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one');
    return (
      <>
          <section className={`${styles.ingredientsBlock}`} >
              
                <p className={`${styles.title} text text_type_main-large mt-10 mb-5`}> Соберите бургер</p>
                <div className={`${styles.tabs} mb-10`} >
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                      Булки
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                      Соусы
                    </Tab>
                    <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                      Начинки
                    </Tab>
                </div>
              
              {/* наверное можно сделать в единственном варианте передавая тип ингредиентов */}
              {/* подсказал ревьюер что можно лучше сделать через useMemo */}
              <div className={styles.wholeList} >
                <p className={`${styles.title} text text_type_main-medium mb-6`}> Булки </p>
                <ul className={styles.list}>
                  {
                    datas.map((element, index) => {
                      
                      return (element.type === 'bun') ? (
                      <li key={index} className={styles.ingredientCard}>
                        
                        <img src={element.image} alt="bun photo"/>
                        <div className={`${styles.priceInfo} mt-1 mb-1 text text_type_main-default`}> <span className='mr-1'>{element.price}</span>  <CurrencyIcon /> </div>
                        <p className={styles.ingredientName}> {element.name}</p>
                        { index === 0 &&
                          (<span className={`${styles.countIngredient} text text_type_digits-default`}>1</span>)
                        }
                      </li>
                    ):null })
                  }
                </ul>
                
                <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`}> Соусы </p>

                <ul className={styles.list}>
                  {
                    datas.map((element, index) => {
                      
                      return (element.type === 'sauce') ? (
                      <li key={index} className={styles.ingredientCard}>
                        <img src={element.image} alt="sauce photo"/>
                        <div className={`${styles.priceInfo} mt-1 mb-1 text text_type_main-default`}> <span className='mr-1'>{element.price}</span> <CurrencyIcon /> </div>
                        <p className={styles.ingredientName}> {element.name}</p>
                        { index === 6 &&
                          (<span className={`${styles.countIngredient} text text_type_digits-default`}>1</span>)
                        }
                      </li>
                    ):null })
                  }
                </ul>

                <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`}> Начинки </p>

                <ul className={styles.list}>
                  {
                    datas.map((element, index) => {
                      
                      return (element.type === 'main') ? (
                      <li key={index} className={styles.ingredientCard}>
                        <img src={element.image} alt="main photo"/>
                        <div className={`${styles.priceInfo} mt-1 mb-1 text text_type_main-default`}> <span className='mr-1'>{element.price}</span> <CurrencyIcon /> </div>
                        <p className={styles.ingredientName}> {element.name}</p>
                      </li>
                    ):null })
                  }
                </ul>
              </div>      
          </section>
      </>
    )
}
export default BurgerIngredients;