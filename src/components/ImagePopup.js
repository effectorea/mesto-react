import React from "react";

function ImagePopup() {
    return(
        <div>
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

export default ImagePopup;