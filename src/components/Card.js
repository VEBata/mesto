export default class Card{
  constructor({data,handleCardClick, handleDeleteClick, handleSetLike, handleDeleteLike},templateSelector,userId) {
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleSetLike = handleSetLike;
		this._handleDeleteLike = handleDeleteLike;
    this._handleDeleteClick = handleDeleteClick;

    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
		this._userId = userId;
		this._ownerId = data.owner._id;
    this._likes = data.likes;
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
    this._likeCounter = this._element.querySelector('.element__counter-likes');
    this._likeCounter.textContent = this._likes.length;

    if(this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }

    this._checkLikedState();
    this._setEventListeners()
    return this._element;
  }

  deleteCard = () => {
		if (this._element) {
			this._element.remove();
			this._element = null;
		}
	}

  handleLike(data) {
		this._likes = data.likes;
		this._likeCounter.textContent = this._likes.length;
		this._cardLikeButton.classList.toggle('element__button-active');
	}

	_checkLikedState() {
			this._data.likes.forEach((like) => {
			if (like._id === this._userId) {
				this._cardLikeButton.classList.add('element__button-active');
			}
		})
	}

	getId() {
		return this._cardId
	}

  _setEventListeners(){
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick()
    });

    this._cardImage.addEventListener('click', () =>
    this._handleCardClick(this._name, this._link));
    
    this._cardLikeButton.addEventListener('click', () => {
			if (this._cardLikeButton.classList.contains('element__button-active')) {
				this._handleDeleteLike(this._cardId);
			} else {
				this._handleSetLike(this._cardId);
			}
		});
  }

 }