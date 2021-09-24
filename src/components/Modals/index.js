import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children, setOpenModal}) {
  return ReactDOM.createPortal(
    <div 
    onClick={() => setOpenModal(false) }
    className="modalContainer">
      {children}
    </div>,
    document.getElementById('modalClose')
  );
}

export { Modal};
