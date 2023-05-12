import {openPopup} from "./index.js";

class Card{
  constructor(data,templateSelector, handleCardClick) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector('.element__img');
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._element.querySelector('.element__text').textContent = this._data.name;
    this._deleteButton = this._element.querySelector('.element__button_basket');
    this._cardLikeButton = this._element.querySelector('.element__button');
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners(){
    this._deleteButton.addEventListener('click',this._deleteCard);
    this._cardLikeButton.addEventListener('click',this._likeCard);
    this._cardImage.addEventListener('click', () =>
    this._handleCardClick({
      link: this._data.link,
      name: this._data.name,
    }));
  }

  _deleteCard = () => {
    this._element.remove();
  }

  _likeCard = () => {
    this._cardLikeButton.classList.toggle('element__button_active');
  }

  _openCardFullImg = () =>{
    openPopup(this._popupFull)
    this._imgPopup.src = this._cardImage.src;
    this._imgPopup.alt = this._cardImage.alt;
    this._popupHeading.textContent = this._cardImage.alt;
  }
 }

export default Card;