import React, { useState } from 'react';
import '../index.css';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';


function App() {

const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);


const handleEditAvatarClick = () => {
  setIsEditAvatarPopupOpen(true);
  };
const handleEditProfileClick = () => {
  setIsEditProfilePopupOpen(true);
};
const handleAddPlaceClick = () => {
  setIsAddPlacePopupOpen(true);
};
const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
}


  return (
    <div className="App">
      <body class="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm 
      name="profileEdit"
      children={
        <>
         <input
                required
                placeholder="Имя"
                name="name"
                id="name"
                type="text"
                minlength="2"
                maxlength="40"
                class="popup__input popup__input_add_name"
              />
              <span id="name-error" class="popup__error"></span>
              <input
                required
                placeholder="Профессиональная деятельность"
                name="about"
                id="about"
                type="text"
                minlength="2"
                maxlength="200"
                class="popup__input popup__input_add_mission"
              />
              <span id="about-error" class="popup__error"></span>
        </>
      }
      title="Редактировать профиль"
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      />

      <PopupWithForm 
      name="avatarEdit"
      children={
        <>
        <input
                required
                placeholder="Ссылка на картинку"
                name="avatar"
                id="avatar"
                type="url"
                class="popup__input popup__input_change_avatar"
              />
        <span id="avatar-error" class="popup__error"></span>
        </>
      }
      title="Обновить аватар"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      />

      <PopupWithForm 
      name="addArticle"
      children={
      <>
        <input
                required
                placeholder="Название"
                name="name"
                id="place"
                type="text"
                class="popup__input"
                minlength="2"
                maxlength="30"
              />
              <span id="place-error" class="popup__error"></span>
              <input
                required
                placeholder="Ссылка на картинку"
                name="link"
                id="link"
                type="url"
                class="popup__input"
              />
              <span id="link-error" class="popup__error"></span>
      </>
      }
      title="Новое место"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      />

      <ImagePopup />  
      </body>
    </div>
  );
}

export default App;
