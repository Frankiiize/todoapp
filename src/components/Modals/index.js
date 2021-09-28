import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children, setOpenModal}) {
  const modal = document.getElementsByClassName('modalContainer');
 
  

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
