import React, { useMemo, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import {IngredientDetails} from '../ingredient-details/ingredient-details';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
// import propTypesData from '../utils/prop-types';
// import PropTypes from 'prop-types';
// import { DataContext } from '../utils/data-context';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsRequest } from '../../services/actions/burger-ingredients';
import CategoryIngredients from '../category-ingredients/category-ingredients';

const category = (category) => {
  switch (category) {
    case "sauce" : {
      return {type: category, title: 'Соусы'}
    }
    case 'main' : {
      return {type: category, title: 'Начинки'}
    }
    case 'bun' : {
      return {type: category, title: 'Булки'}
    }
  }
}

export default function BurgerIngredients() {

   
   
    const [isShowModal, setIsShowModal] = React.useState(false);
    const [currentTab, setCurrentTab] = React.useState('buns');
    const [ingredientToPop, setIngredientToPop] = React.useState({});
   
    const datas = useSelector(store => store.burgerIngredientsReducer.ingredients); 
  
    const buns = useMemo(() => datas.filter((element) => element.type === 'bun'), [datas]);
    const mains = useMemo(() => datas.filter((element) => element.type === 'main'), [datas]);
    const sauces = useMemo(() => datas.filter((element) => element.type === 'sauce'), [datas]);
  
    const selectTab = (tab) => {
      setCurrentTab(tab);
      const node = document.getElementById(tab);
      if (node !== undefined) node.scrollIntoView({ behavior: "smooth" });
    }
  
    const showIngredientInfo = (event) => {
      onOpenClick();
      const selectedIngredient = datas.find( (element) => element._id === event.currentTarget.dataset.id);
      setIngredientToPop(selectedIngredient);
    }
    const onOpenClick = () => {
      setIsShowModal(true);
    }
    const onCloseClick = () => {
      setIsShowModal(false);
    }
  
    const dispatch = useDispatch();
  
   useEffect(() => {
      dispatch(getIngredientsRequest());
   },[dispatch]);
  
   useEffect(()=> {
    console.log(datas);
   },[]);
  
    return (
      <section className={`${styles.ingredientsBlock}`} >
  
        <p className={`${styles.title} text text_type_main-large mt-10 mb-5`}> Соберите бургер 234234</p>
        <div className={`${styles.tabs} mb-10`} >
  
          <Tab value="buns" active={currentTab === 'buns'} onClick={selectTab}>
            Булки
          </Tab>
          <Tab value="sauces" active={currentTab === 'sauces'} onClick={selectTab}>
            Соусы
          </Tab>
          <Tab value="mains" active={currentTab === 'mains'} onClick={selectTab}>
            Начинки
          </Tab>
  
        </div>
  
        <div className={styles.wholeList} >
          <CategoryIngredients category={category('main')} />
  
          <p className={`${styles.title} text text_type_main-medium mb-6`} id="buns"> Булки </p>
          <ul className={styles.list}>
            {
              buns.map((element) => {
                  return <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/>
              })
            }
          </ul>
  
          <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id="sauces"> Соусы </p>
          <ul className={styles.list}>
            {
              sauces.map((element) => {
                return <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/>
              })
            }
          </ul>
  
          <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id="mains"> Начинки </p>
          <ul className={styles.list}>
            {
              mains.map((element) => {
                return <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/>
              })
            }
          </ul>
  
        </div>
  
        {isShowModal && 
          <Modal onCloseClick={onCloseClick} title='Детали ингредиента' >
            <IngredientDetails ingredient={ingredientToPop} />
          </Modal>
        }
      </section>
    )
  }
 
  /* BurgerIngredients.propTypes = {
    loadedData: PropTypes.arrayOf(propTypesData.isRequired).isRequired 
  }  */