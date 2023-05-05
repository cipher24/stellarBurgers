
import {Logo,BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import './app-header.module.css';

function AppHeader() {
  return (
    <header className={`${styles.appheader} p-4`} >
       

       <nav className={`${styles.headernav} p-5 mr-2`}>
           
              <BurgerIcon />
              <p className="text text_type_main-default ml-2">Конструктор</p>
           
          </nav>
    
          <nav className={`${styles.headernav} ${styles.moveLogo} p-5`} >
              <ListIcon  type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
          </nav>

    
      <Logo className={styles.logo} />

        <nav className={`${styles.headernav} ${styles.account} p-5 ml-30`}>
              <ProfileIcon  type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
        </nav>

    </header>   
  )
}

export default AppHeader;
