import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';

export default function AppHeader() {
  return (
    <header >
      <nav className={`${styles.appHeader} pt-4 pb-4`}>

        <a href="#" className={`${styles.headerLink} pt-4 pb-4 pl-5 pr-5`}>
          <BurgerIcon />
          <p className="text text_type_main-default ml-2">
            Конструктор
          </p>
        </a>

        <a href="#" className={`${styles.headerLink} pt-4 pb-4 pl-5 pr-5`}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-defaul text_color_inactive ml-2">
            Лента заказов
          </p>
        </a>

        <a href="#" className={`${styles.headerLink} ${styles.linksLayout}`}>
          <Logo className={styles.logo} />
        </a>

        <a href="#" className={`${styles.headerLink} pt-4 pb-4 pl-5 pr-5`}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive ml-2">
            Личный кабинет
          </p>
        </a>

      </nav>
    </header>
  )
}

// export default AppHeader;
