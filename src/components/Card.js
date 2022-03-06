function Card({card, onCardClick}) {

    
    function handleCardClick() {
        onCardClick(card);
      }

    return(
        <div>
                    <article className="element">
                        <button type="button" className="element__trasher"></button>
                        <img
                        src={card.link}
                        alt={card.name}
                        onClick={handleCardClick}
                        className="element__image"
                        />          
                        <div className="element__info">
                        <h2 className="element__title">{card.name}</h2>
                        <div className="element__container">
                            <button type="button" className="element__heart"></button>
                            <span className="element__counter">{card.likes.length}</span>
                        </div>
                        
                        </div>
                    </article>  
        </div>
    )
}

export default Card;