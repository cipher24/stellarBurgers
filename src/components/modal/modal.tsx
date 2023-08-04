import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import { useEffect, FC, PropsWithChildren } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot: HTMLElement | null = document.getElementById('react-modals')!;

type TModalProps = {
  title?: string;
  onCloseClick: () => void;
}
const Modal: FC<PropsWithChildren<TModalProps>> = (props) => {
  const { children, title, onCloseClick } = props;

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
          {title && <>
            <p>{title}</p>
          </>
          }
        </header>
        {children}
        <button className={styles.closeIcon} aria-label='закрыть'>
          <CloseIcon type="primary" onClick={onCloseClick} />
        </button>
      </div>
      <ModalOverlay onCloseClick={onCloseClick}></ModalOverlay>
    </>
    , modalRoot
  );
}

export default Modal;
