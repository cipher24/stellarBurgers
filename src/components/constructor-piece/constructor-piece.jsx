import styles from './constructor-piece.module.css';
import { DragIcon, CurrencyIcon, DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import propTypesData from '../utils/prop-types';
import PropTypes from 'prop-types';
import { useDrop, useDrag } from 'react-dnd';
import { useRef} from 'react';

export default function ConstructorPiece({ element, index, swapIngredient, deleteIngredient }) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'item',
  
    hover(element, monitor) {

      if (!ref.current) {
        return;
      }
      if (element.index === index) {
        return;
      }

      const hoverBounding = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBounding.bottom - hoverBounding.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBounding.top;

      if ((element.index > index) && (hoverClientY > hoverMiddleY)) {
        return;
      }
      if ((element.index < index) && (hoverClientY < hoverMiddleY)) {
        return;
      }

      swapIngredient(element.index, index);
      element.index = index;
    }
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: () => ({ id: element.id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;

  if (element.type !== 'bun') drag(drop(ref))

  const deleteClick = () => {
    deleteIngredient(index, element)
  }
  return (

    <li
      ref={ref}
      style={{ opacity }}
      onDrop={(e) => e.preventDefault()}
      className={`${styles.constructorLi} mt-4`}
    >
      <DragIcon />
      <div className={` ${styles.constructorPiece} pl-6 pr-8`}>
        <div className={` ${styles.listLeftPart}`}>
          <img className={`${styles.constructorImage} `} src={element.image_mobile}></img>
          <p className={styles.name}>{`${element.name}`}</p>
        </div>
        <div className={` ${styles.listRightPart} `}>
          <p className={`${styles.priceInfo}`}>
            <span className="mr-1">{element.price}</span>
            <CurrencyIcon />
          </p>
          <DeleteIcon className='mr-8' onClick={deleteClick} />
        </div>
      </div>
    </li>
  )
}


ConstructorPiece.propTypes = {
  element: propTypesData.isRequired,
  index: PropTypes.number.isRequired,
  swapIngredient: PropTypes.func.isRequired,
  deleteIngredient: PropTypes.func.isRequired
} 