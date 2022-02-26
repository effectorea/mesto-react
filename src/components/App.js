import '../index.css';
function App() {
  return (
    <div className="App">
       <header class="header">
      <img src="<%=require('./images/logo.svg')%>" alt="Логотип Место" class="header__logo" />
    </header>

    <main class="content">
      <section class="profile">
        <div class="profile__wrapper">
          <img
          src="#"
          alt="Аватарка"
          class="profile__avatar"
          />
          <div class="profile__cover"></div>
        </div>
        
        
        
        <div class="profile__info">
          <div class="profile__info-twin">
            <h1 class="profile__title"></h1>
            <button type="button" class="profile__edit-button"></button>
          </div>
          <p class="profile__subtitle"></p>
        </div>
        <button type="button" class="profile__add-button"></button>
      </section>
      <section class="elements">

      </section>
    </main>
    <footer class="footer">
      <p class="footer__copyright">© 2021 Mesto Russia</p>
    </footer>

    <div id="profileEditPopup" class="popup popup_profile">
      <div class="popup__container">
        <h2 class="popup__title">Редактировать профиль</h2>
        <form name="text" action="#" class="popup__form" novalidate>
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
          <button type="submit" class="popup__save-btn">Сохранить</button>
        </form>
        <button type="button" class="popup__close"></button>
      </div>
    </div>

    <div id="articleAddPopup" class="popup popup_article">
      <div class="popup__container">
        <h2 class="popup__title">Новое место</h2>
        <form name="text" action="#" class="popup__form" novalidate>
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
          <button type="submit" id="articleSave-btn" class="popup__save-btn">Создать</button>
        </form>
        <button type="button" class="popup__close"></button>
      </div>
    </div>

    <div id="changeAvatarPopup" class="popup">
      <div class="popup__container">
        <h2 class="popup__title">Обновить аватар</h2>
        <form name="text" action="#" class="popup__form" novalidate>
          <input
            required
            placeholder="Ссылка на картинку"
            name="avatar"
            id="avatar"
            type="url"
            class="popup__input popup__input_change_avatar"
          />
          <span id="avatar-error" class="popup__error"></span>
          <button type="submit" id="avatarSavebtn" class="popup__save-btn">Сохранить</button>
        </form>
        <button type="button" class="popup__close"></button>
      </div>
    </div>

    <div id="confirmationPopup" class="popup">
      <div class="popup__container">
        <h2 class="popup__title">Вы уверены?</h2>
        <form name="text" action="#" class="popup__form" novalidate>
          <button type="submit" id="confirmation-btn" class="popup__save-btn">Да</button>
        </form>
        <button type="button" class="popup__close"></button>
      </div>
    </div>

    <div id="imageBigPopup" class="popup popup_image_big">
      <div class="popup__content">
        <button type="button" class="popup__close"></button>
        <img src="#" alt="Изображение" class="popup__image" />
        <span class="popup__place-name"></span>
      </div>
    </div>
      
    </div>
  );
}

export default App;
