import React, { useMemo, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import {IngredientDetails} from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsRequest } from '../../services/actions/burger-ingredients';
import CategoryIngredients from '../category-ingredients/category-ingredients';
import { closeDetails } from '../../services/actions/ingredient-details';
import { category } from '../utils/category-const';

export default function BurgerIngredients() {
  
      const options = {
        root: document.querySelector('.wholeList'),
        rootMargin: '100px 0px -500px 0px',
        threshold: 0.5 
      };
      const intersectCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting ) {
            setCurrentTab(entry.target.id);
          }
        });
      };

      let observer = new IntersectionObserver(intersectCallback, options);

      const ingredientTargets = document.querySelectorAll('h3');
      ingredientTargets.forEach((ingredientTarget) => {
        observer.observe(ingredientTarget);
      });

    const [currentTab, setCurrentTab] = React.useState('bun');


    const selectTab = (tab) => {
      setCurrentTab(tab);
      const node = document.getElementById(tab);
      if (node !== undefined) node.scrollIntoView({ behavior: "smooth" });
    }

    const isShowDetails = useSelector(store=>store.ingredientDetailsReducer.isShowDetails);

    const dispatch = useDispatch();

    const onCloseClick = () => {
      dispatch(closeDetails())
    }
  
  
    return (
      <section className={`${styles.ingredientsBlock}`} >
  
        <p className={`${styles.burgerTitle} text text_type_main-large mt-10 mb-5`}> Соберите бургер</p>
        <div className={`${styles.tabs} mb-10`} >
  
          <Tab value="bun" active={currentTab === 'bun'} onClick={selectTab}>
            Булки
          </Tab>
          <Tab value="sauce" active={currentTab === 'sauce'} onClick={selectTab}>
            Соусы
          </Tab>
          <Tab value="main" active={currentTab === 'main'} onClick={selectTab}>
            Начинки
          </Tab>
  
        </div>
  
        <div className={`${styles.wholeList}`} >
          <CategoryIngredients category={category('bun')} />
          <CategoryIngredients category={category('sauce')} />
          <CategoryIngredients category={category('main')} />
        </div>
         
  
        {isShowDetails && 
          <Modal 
          onCloseClick={onCloseClick}
           title='Детали ингредиента' >
            <IngredientDetails />
          </Modal>
        }
      </section>
    )
  }
