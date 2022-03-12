import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке данных ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api.setCardLike(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    } else {
      api.removeCardLike(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => (c._id !== card._id)));
    });
  }

  const article = () => {
    return cards.map((element) => (
      <Card
        card={element}
        key={element._id}
        onCardClick={onCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
    ));
  };

  return (
    <div>
      <main className="content">
        <section className="profile">
          <div onClick={onEditAvatar} className="profile__wrapper">
            <img
              src={currentUser?.avatar}
              alt="Аватарка"
              className="profile__avatar"
            />
            <div className="profile__cover"></div>
          </div>
          <div className="profile__info">
            <div className="profile__info-twin">
              <h1 className="profile__title">{currentUser?.name}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__subtitle">{currentUser?.about}</p>
          </div>
          <button
            onClick={onAddPlace}
            type="button"
            className="profile__add-button"
          ></button>
        </section>
        <section className="elements">{article()}</section>
      </main>
    </div>
  );
}

export default Main;
