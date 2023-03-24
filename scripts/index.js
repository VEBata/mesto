const buttonPopupOpen = document.querySelector('.profile__popup');
const popupBox = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const textInput = document.querySelector('.popup__input_type_text');
const popupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

function openPopup() {
    popupBox.classList.add('popup_opened');
}

function closePopup() {
    popupBox.classList.remove('popup_opened');
}

buttonPopupClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = textInput.value;
    closePopup();
})

buttonPopupOpen.addEventListener('click', () => {
    openPopup();
    nameInput.value = profileName.textContent;
    textInput.value = profileText.textContent;
})