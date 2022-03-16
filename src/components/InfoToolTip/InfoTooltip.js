import React from 'react';
import './InfoToolTip.css'

function InfoTooltip({ isOpen, setIsOpen, image, message }) {

  const onClose = () => {
    setIsOpen(false);
  };

  const onEscape = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keyup', onEscape);

    return () => {
      document.removeEventListener('keyup', onEscape);
    };
  });

  return (
    <div className={`popup popup_type_info ${isOpen && 'popup_visible'}`}>
    {/* <div className='popup popup_type_info popup_visible'> */}
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__container popup-info__container">
          <img className="popup-info__image" src={image} alt="Ответ сервера" />
        <h2 className="popup-info__title">{message}</h2>
        <button type="button" className="popup__close-btn" onClick={onClose}></button> 
      </div>
    </div> 
  )
}

export default InfoTooltip; 