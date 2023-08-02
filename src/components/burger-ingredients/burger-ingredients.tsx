import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import CategoryIngredients from '../category-ingredients/category-ingredients';
import { category } from '../../utils/category-const';

export default function BurgerIngredients() {

  const options = {
    root: document.querySelector('.wholeList'),
    rootMargin: '100px 0px -500px 0px',
    threshold: 0.5
  };
  const intersectCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentTab(entry.target.id);
      }
    });
  };

  let observer = new IntersectionObserver(intersectCallback, options);

  const ingredientTargets = document.querySelectorAll('h3');
  ingredientTargets.forEach((ingredientTarget) => {
    observer.observe(ingredientTarget);
  });

  const [currentTab, setCurrentTab] = React.useState<string>('bun');


  const selectTab = (tab: string) => {
    setCurrentTab(tab);
    const node: HTMLElement | null = document.getElementById(tab);
    if (node) {
      node.scrollIntoView({ behavior: "smooth" })
    }
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

      <div className={`${styles.wholeList}`} data-cy="ingredients" >
        <CategoryIngredients category={category('bun')} />
        <CategoryIngredients category={category('sauce')} />
        <CategoryIngredients category={category('main')} />
      </div>

    </section>
  )
}
