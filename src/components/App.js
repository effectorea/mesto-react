import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profileEdit"
          children={
            <div>
              <input
                required
                placeholder="Имя"
                name="name"
                id="name"
                type="text"
                minLength="2"
                maxLength="40"
                className="popup__input popup__input_add_name"
              />
              <span id="name-error" className="popup__error"></span>
              <input
                required
                placeholder="Профессиональная деятельность"
                name="about"
                id="about"
                type="text"
                minLength="2"
                maxLength="200"
                className="popup__input popup__input_add_mission"
              />
              <span id="about-error" className="popup__error"></span>
            </div>
          }
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="avatarEdit"
          children={
            <div>
              <input
                required
                placeholder="Ссылка на картинку"
                name="avatar"
                id="avatar"
                type="url"
                className="popup__input popup__input_change_avatar"
              />
              <span id="avatar-error" className="popup__error"></span>
            </div>
          }
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="addArticle"
          children={
            <div>
              <input
                required
                placeholder="Название"
                name="name"
                id="place"
                type="text"
                className="popup__input"
                minLength="2"
                maxLength="30"
              />
              <span id="place-error" className="popup__error"></span>
              <input
                required
                placeholder="Ссылка на картинку"
                name="link"
                id="link"
                type="url"
                className="popup__input"
              />
              <span id="link-error" className="popup__error"></span>
            </div>
          }
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
