import Card from "./card.js";
import FormValidator from "./FormValidator.js"

const buttonPopupOpen = document.querySelector('.profile__popup');
const popupBox = document.querySelector('.popup_create');
const buttonPopupClose = document.querySelector('.popup__close_create');
const nameInput = document.querySelector('.popup__input_type_name');
const textInput = document.querySelector('.popup__input_type_text');
const popupForm = document.querySelector('.popup__form_create');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

//открыываем  popup
export function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscape);
  }
  /*закрываем popup*/
function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
   }
   
buttonPopupClose.addEventListener('click', () => {
    closePopup(popupBox);
});

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = textInput.value;
    closePopup(popupBox);
})

buttonPopupOpen.addEventListener('click', () => {
    openPopup(popupBox);
    nameInput.value = profileName.textContent;
    textInput.value = profileText.textContent;
})

const cardAdd = document.querySelector('.profile__button-plus')
const boxAddImg = document.querySelector('.popup_place')
const boxCloseImg = document.querySelector('.popup__close_place')

boxCloseImg.addEventListener('click', () => {
    closePopup(boxAddImg)
})

const nameInputAdd = document.querySelector('.popup__input_type_title')
const linkInputAdd = document.querySelector('.popup__input_type_link')
const elements = document.querySelector('.elements');

cardAdd.addEventListener('click', () => {
    openPopup(boxAddImg)
})

function createCard(data) {
    const card = new Card(data, '.template');
    return card.createCard();
  };

//перебираем
initialCards.forEach(function (item) {
    const elementCreate = createCard(item)
    elements.prepend(elementCreate)
});

//добавляем карточку
const imgFormAdd = document.querySelector('.popup__form_place');

imgFormAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    const addNewElement = {
        name: nameInputAdd.value,
        link: linkInputAdd.value
    };
    elements.prepend(createCard(addNewElement));
    imgFormAdd.reset();

    closePopup(boxAddImg);
})

const popupFull = document.querySelector('.popup-full');
const popupFullClose = document.querySelector('.popup-full__close');

popupFullClose.addEventListener('click', () => {
    closePopup(popupFull);
})

//закрываем оверлеем
function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
};

popupBox.addEventListener('mousedown', handleOverlayClick);
boxAddImg.addEventListener('mousedown', handleOverlayClick);
popupFull.addEventListener('mousedown', handleOverlayClick);

//закрываем Esc
function handleEscape(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_opened'));
    }
  };

const validatorConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };
  
  const profileValidator = new FormValidator(validatorConfig, popupBox);
  profileValidator.enableValidation();
  
  const cardValidator = new FormValidator(validatorConfig, boxAddImg);
  cardValidator.enableValidation();