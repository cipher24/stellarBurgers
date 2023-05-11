import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  const { onCloseClick } = props;

  return (
    <div className={styles.overlay} onClick={onCloseClick}>
    </div>
  );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  onCloseClick: PropTypes.func.isRequired
}