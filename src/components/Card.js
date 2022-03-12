import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Card({ card, onCardClick, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__trasher ${isOwn ? 'element__trasher' : 'element__trasher_disabled'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__heart ${isLiked ?  'element__heart_active' : 'element__heart'}`
  );

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  return (
    <div>
      <article className="element">
        <button type="button" className={cardDeleteButtonClassName}></button>
        <img
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
          className="element__image"
        />
        <div className="element__info">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__container">
            <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName}></button>
            <span className="element__counter">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
