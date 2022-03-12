import React, { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке данных пользователя ${err}`);
      });
  }, []);

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
    setSelectedCard(null);
  };

  const handleUpdateUser = (info) => {
    api.setInfo(info)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`Ошибка при загрузке данных пользователя ${err}`);
    });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
