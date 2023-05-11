import {openPopup} from "./index.js";

class Card{
  constructor(data,templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._popupFull = document.querySelector('.popup-full')
    this._imgPopup = this._popupFull.querySelector('.popup__img-full');
    this._popupHeading = this._popupFull.querySelector('.popup__heading-full');
  }

  _createCardTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  createCard () {
    this._element = this._createCardTemplate();
    this._elementCard = this._element.querySelector('.element__img');
    this._elementCard.src = this._data.link;
    this._elementCard.alt = this._data.name;
    this._element.querySelector('.element__text').textContent = this._data.name;
    this._deleteButton = this._element.querySelector('.element__button_basket');
    this._cardLikeButton = this._element.querySelector('.element__button');
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners(){
    this._deleteButton.addEventListener('click',this._cardDelete);
    this._cardLikeButton.addEventListener('click',this._cardLike);
    this._elementCard.addEventListener('click',this._cardFullOpenImg);
  }

  _cardDelete = () => {
    this._element.remove();
  }

  _cardLike = () => {
    this._cardLikeButton.classList.toggle('element__button_active');
  }

  _cardFullOpenImg = () =>{
    openPopup(this._popupFull)
    this._imgPopup.src = this._elementCard.src;
    this._imgPopup.alt = this._elementCard.alt;
    this._popupHeading.textContent = this._elementCard.alt;
  }
 }

export default Card;