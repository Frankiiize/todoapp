import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children, setOpenModal}) {
 
 
  return ReactDOM.createPortal(
    <div 
    onClick={
      (envt) => {
        (envt.target.classList[0] === 'modalContainer' ) && setOpenModal(false);
        }}
    className="modalContainer">
      {children}
    </div>,
    document.getElementById('modalClose')
  );
}

export { Modal};
