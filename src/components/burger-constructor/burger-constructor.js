import styles from './burger-constructor.module.css'
import datas from '../utils/data';
import {Button, CurrencyIcon, DeleteIcon, DragIcon, LockIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {     
  return (     
          <section className={`${styles.constructorBlock} text text_type_main-default`}>
                
                <ul className={`${styles.list} mt-25 mb-10 ml-4 mr-4`}>

                    <li className={styles.flexLi} >
                        <div className={` ${styles.firstLi} pl-6 pr-8`}>
                          <img className={styles.constructorImage} src={datas[0].image_mobile}></img> 
                          <p>{`${datas[0].name} (верх)`}</p>
                          <p className={styles.priceInfo}>
                            <span className="mr-1">{datas[0].price}</span> 
                            <CurrencyIcon />
                          </p>
                          <LockIcon type="secondary" />
                        </div>
                    </li>
                    <div className={`${styles.constructorScroll} pr-1`}>
                    {datas.map(element => ( 
                      element.type === "main" && 
                      <li className={styles.constructorLi}>
                          <DragIcon />
                          <div className={` ${styles.constructorPiece} ml-1`}>
                            <img className={`${styles.constructorImage}`} src={element.image_mobile}></img> 
                            <p>{element.name}</p>
                            <p className={styles.priceInfo}>
                              <span className="mr-1">{element.price}</span> 
                              <CurrencyIcon />
                              </p>
                            <DeleteIcon className='mr-8' />
                          </div>
                      </li>
                    ))}
                    </div>
                   <li className={`${styles.flexLi} mt-4`} >
                        <div className={` ${styles.lastLi} pl-6 pr-8`}>
                          <img className={styles.constructorImage} src={datas[0].image_mobile}></img> 
                          <p>{`${datas[0].name} (низ)`}</p>
                          <p className={styles.priceInfo}>
                            <span className="mr-1">{datas[0].price}</span> 
                            <CurrencyIcon />
                          </p>
                          <LockIcon type="secondary" />
                        </div>
                    </li>

                </ul>

                <form className={styles.confirmOrder}>
                  <p className='text text_type_digits-medium mr-10'> <span>610</span> <CurrencyIcon /></p>
                  <Button htmlType="button" type="primary" size="medium">
                    Оформить заказ
                  </Button>
                </form>
                
          </section>
  )
}

export default BurgerConstructor;