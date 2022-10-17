import '../css/index.css'
import React from 'react';
import cancel from '../assets/cancel.png'
import useEscapeTouch from '../useEscapeTouch';


const Modal = (props) => {
  useEscapeTouch('Escape',(props.closeModal))
  return (
    <div className='content'>
      <div className='modal'>
     
        <img src={cancel} alt="cancel" className='close' onClick={props.closeModal}/>
      </div>
    </div>
  );
};

export default Modal;