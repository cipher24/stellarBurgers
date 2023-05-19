import React from 'react';
import styles from './constructor-piece.module.css';
import { DragIcon, CurrencyIcon, DeleteIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import propTypesData from '../utils/prop-types';

function ConstructorPiece({ element }) {
  return (
    <li className={styles.constructorLi}>
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
          <DeleteIcon className='mr-8' />
        </div>
      </div>
    </li>
  )
}

export default ConstructorPiece;

ConstructorPiece.propTypes = {
  element: propTypesData.isRequired
} 