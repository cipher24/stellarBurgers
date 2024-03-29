import styles from './burger-ingredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIngredientInfo } from '../../services/actions/ingredient-details';
import { useDispatch } from '../../utils/hooks';
import { useDrag } from 'react-dnd';
import { useLocation, Link } from 'react-router-dom';
import { IElementTemp } from '../../utils/types';
import { FC } from 'react';

type TFunctionProps = {
  element: IElementTemp;
  count: number;
};

const BurgerIngredient: FC<TFunctionProps> = ({ element, count }) => {
  //передавать, не элемент, а айди ингредиента, и уже тут достоввать по айди нужный ингредиент из хранилища.
  const dispatch = useDispatch();
  const location = useLocation();

  const showIngredientInfo = () => {
    dispatch(getIngredientInfo(element))
  };
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { element },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.3 : 1,

    })
  });

  const countInfo = count
    ? <Counter count={count} size="default" extraClass="m-1" />
    : '';
  return (
    <Link
      to={{
        pathname: `/ingredients/${element._id}`
      }}
      state={{ background: location }}
      className={styles.link}
    >
      <li
        ref={dragRef}
        style={{ opacity }}
        className={styles.ingredientCard}
        data-id={element._id}
        onClick={showIngredientInfo} >
        <img src={`${element.image}`} alt={`изображение ${element.name}`} />
        <div className={`${styles.priceInfo} mt-1 mb-1 text text_type_main-default`}>
          <span className='mr-1'>{element.price}</span>
          <CurrencyIcon type='primary' />
        </div>
        <p className={styles.ingredientName}> {element.name}</p>
        {countInfo}
      </li>
    </Link>
  )
}

export default BurgerIngredient;
