import React, { useEffect } from "react";

function PopupWithForm({name, title, children, isOpen, onClose}) {
    const handleEscClose = (e) => {
        if(e.key === 'Escape' || e.target.classList.contains('popup__close') || e.target.classList.contains('popup_opened')) {
            onClose(e);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscClose);
        document.addEventListener('mousedown', handleEscClose);
        return(() => {
            document.removeEventListener('keydown', handleEscClose);
            document.removeEventListener('mousedown', handleEscClose);
        })
    })
    

    return(
        <div>
            <div id={name} className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
                <div className="popup__container">
                    <h2 className="popup__title">{title}</h2>
                    <form name={name} action="#" className="popup__form" novalidate>
                    {children}
                    <button type="submit" className="popup__save-btn">Сохранить</button>
                    </form>
                    <button type="button" className="popup__close" onClick={onClose}></button>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;