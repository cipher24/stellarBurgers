import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';
import { useEffect } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('react-modals');

const Modal = (props) => {
  const { children, onCloseClick, title } = props;
 

  useEffect(() => {
    const escPressHandler = (event) => {
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
          <CloseIcon onClick={onCloseClick} />
        </header>
        {children}
      </div>
      <ModalOverlay onCloseClick={onCloseClick}></ModalOverlay>
    </>
    , modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  title: PropTypes.string
}