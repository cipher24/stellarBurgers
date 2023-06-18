import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function AppHeader() {

  const location = useLocation();
  return (
    <header >
      <nav className={`${styles.appHeader} pt-4 pb-4`}>
      <Link to='/'  className={`${styles.headerLink} pt-4 pb-4 pl-5 pr-5`}>
          <BurgerIcon type={`${location.pathname === "/" ? "primary" : "secondary"}`} />
          <p className={`text text_type_main-default ml-2 ${location.pathname === "/" ? '': "text_color_inactive" }`}>
            Конструктор
          </p>
        </Link>

        <Link to='/feed' className={`${styles.headerLink} pt-4 pb-4 pl-5 pr-5`}>
          <ListIcon type={`${location.pathname === "/feed" ? "primary" : "secondary"}`} />
          <p className={`text text_type_main-defaul ${location.pathname === "/feed" ? '': "text_color_inactive" } ml-2`}>
            Лента заказов
          </p>
        </Link>

        <Link to='/' className={`${styles.headerLink} ${styles.linksLayout}`}>
          <Logo className={styles.logo} />
        </Link>
        

        <Link to='/profile' className={`${styles.headerLink} pt-4 pb-4 pl-5 pr-5`}>
        <ProfileIcon type={`${location.pathname === "/profile" ? "primary" : "secondary"}`} />
          <p className={`text text_type_main-default ${location.pathname.indexOf("/profile") === 0 ? '': "text_color_inactive" } ml-2`}>
            Личный кабинет
          </p>
        </Link>

      </nav>
    </header>
  )
}
