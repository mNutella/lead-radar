import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';


const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={`modal-window ${show && 'modal-window-active'}`}>
      <div className="shadow rounded">
        <button title="Close" onClick={handleClose} className="modal-close" type="button">Закрыть</button>
        {children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  show: false,
  children: undefined,
  handleClose: null,
};

Modal.propTypes = {
  show: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  handleClose: PropTypes.any,
};

export default Modal;
