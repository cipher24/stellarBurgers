
import {Logo,BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';


function AppHeader() {
  return (
    <header >
       
        <nav className={`${styles.appheader} pt-4 pb-4`}>
          
          <a href="#" className={`${styles.headerLink} p-5`}>
              <BurgerIcon />
              <p className="text text_type_main-default ml-2">
                Конструктор
              </p>
          </a>
          
    
          
          <a href="#" className={`${styles.headerLink} p-5`}>
              <ListIcon  type="secondary" />
              <p className="text text_type_main-defaul text_color_inactive ml-2">
                Лента заказов
              </p>
          </a>
          

          <a href="#" className={`${styles.headerLink} ${styles.moveLinks}`}>
              <Logo className={styles.logo} />
          </a>

          <a href="#" className={`${styles.headerLink} p-5`}>
              <ProfileIcon  type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Личный кабинет
              </p>
          </a>
              
        </nav>

    </header>   
  )
}

export default AppHeader;
