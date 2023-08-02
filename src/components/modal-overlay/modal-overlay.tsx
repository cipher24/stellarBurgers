import styles from './modal-overlay.module.css';
import { FC } from 'react';

type TModalOverlayProps = {
  onCloseClick: () => void;
}
const ModalOverlay: FC<TModalOverlayProps> = (props) => {
  const { onCloseClick } = props;

  return (
    <div className={styles.overlay} onClick={onCloseClick} data-cy='modal-overlay'>
    </div>
  );
}

export default ModalOverlay;
