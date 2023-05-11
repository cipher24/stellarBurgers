import React, { useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import PropTypes from 'prop-types';

function BurgerIngredients(props) {

  const [isShowModal, setIsShowModal] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState('one');
  const [ingredientToPop, setIngredientToPop] = React.useState({});
 
  const datas = props.loadedData;

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

  return (
    <section className={`${styles.ingredientsBlock}`} >

      <p className={`${styles.title} text text_type_main-large mt-10 mb-5`}> Соберите бургер</p>
      <div className={`${styles.tabs} mb-10`} >

        <Tab value="one" active={currentTab === 'one'} onClick={selectTab}>
          Булки
        </Tab>
        <Tab value="two" active={currentTab === 'two'} onClick={selectTab}>
          Соусы
        </Tab>
        <Tab value="three" active={currentTab === 'three'} onClick={selectTab}>
          Начинки
        </Tab>

      </div>

      <div className={styles.wholeList} >

        <p className={`${styles.title} text text_type_main-medium mb-6`} id="one"> Булки </p>
        <ul className={styles.list}>
          {
            buns.map((element) => {
                return <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/>
            })
          }
        </ul>

        <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id="two"> Соусы </p>
        <ul className={styles.list}>
          {
            sauces.map((element) => {
              return <BurgerIngredient key={element._id} element={element} showIngredientInfo={showIngredientInfo}/>
            })
          }
        </ul>

        <p className={`${styles.title} text text_type_main-medium mt-10 mb-6`} id="three"> Начинки </p>
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
export default BurgerIngredients;

BurgerIngredients.propTypes = {
  loadedData: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired).isRequired 
}