import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import { useEffect, FC, ReactNode } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot: HTMLElement | null = document.getElementById('react-modals')!;

type TModalProps = {
  children?: ReactNode;
  title?: string;
  onCloseClick: () => void;
}
const Modal: FC<TModalProps> = (props) => {
  const { children, title, onCloseClick } = props;
  /*  const escPressHandler = (event: KeyboardEvent) => {
     if (event.key === "Escape") onCloseClick();
   } */
  useEffect(() => {
    const escPressHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseClick();
    }

    document.addEventListener('keydown', escPressHandler)
    return () => {
      document.removeEventListener('keydown', escPressHandler)
    }
  }, [onCloseClick]);

  return ReactDOM.createPortal(
    <>
      <div className={` ${styles.modal} text text_type_main-large`}>
        <header className={`${styles.modalHeader} mt-10 ml-10 mr-10`}>
          <p>{title ? title : ''}</p>
          <CloseIcon type="primary" onClick={onCloseClick} />
        </header>
        {children}
      </div>
      <ModalOverlay onCloseClick={onCloseClick}></ModalOverlay>
    </>
    , modalRoot
  );
}

export default Modal;
