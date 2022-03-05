import React from "react";
import avatar from '../images/kusto_image.jpg';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
}) {
    return (
        <div>
            <main class="content">
                <section class="profile">
                    <div onClick={onEditAvatar} class="profile__wrapper">
                    <img
                    src={avatar}
                    alt="Аватарка"
                    class="profile__avatar"
                    />
                    <div class="profile__cover"></div>
                    </div>
                    
                    
                    
                    <div class="profile__info">
                    <div class="profile__info-twin">
                        <h1 class="profile__title">Жак-Ив Кусто</h1>
                        <button onClick={onEditProfile} type="button" class="profile__edit-button"></button>
                    </div>
                    <p class="profile__subtitle">Исследователь океана</p>
                    </div>
                    <button onClick={onAddPlace} type="button" class="profile__add-button"></button>
                </section>
                <section class="elements">

                </section>
            </main>
        </div>
    );
}

export default Main;