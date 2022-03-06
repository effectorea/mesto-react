import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("Имя пользователя");
  const [userDescription, setUserDescription] = useState("Описание");
  const [userAvatar, setUserAvatar] = useState("Аватар");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке данных пользователя ${err}`);
      });

    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке данных ${err}`);
      });
  }, []);

  const article = () => {
    return cards.map((element) => (
      <Card card={element} key={element._id} onCardClick={onCardClick} />
    ));
  };

  return (
    <div>
      <main className="content">
        <section className="profile">
          <div onClick={onEditAvatar} className="profile__wrapper">
            <img src={userAvatar} alt="Аватарка" className="profile__avatar" />
            <div className="profile__cover"></div>
          </div>
          <div className="profile__info">
            <div className="profile__info-twin">
              <h1 className="profile__title">{userName}</h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
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
