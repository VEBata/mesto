class Card{
  constructor({data,handleCardClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
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

 getCard () {
    this._element = this._createCardTemplate();
    this._cardImage = this._element.querySelector('.element__img');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__text').textContent = this._name;
    this._deleteButton = this._element.querySelector('.element__button_basket');
    this._cardLikeButton = this._element.querySelector('.element__button');
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners(){
    this._deleteButton.addEventListener('click',this._deleteCard);
    this._cardLikeButton.addEventListener('click',this._likeCard);
    this._cardImage.addEventListener('click', () =>
    this._handleCardClick(this._name, this._link));
  }

  _deleteCard = () => {
    this._element.remove();
  }

  _likeCard = () => {
    this._cardLikeButton.classList.toggle('element__button_active');
  }
 }

export default Card;