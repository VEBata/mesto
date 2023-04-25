const buttonPopupOpen = document.querySelector('.profile__popup');
const popupBox = document.querySelector('.popup_create');
const buttonPopupClose = document.querySelector('.popup__close_create');
const nameInput = document.querySelector('.popup__input_type_name');
const textInput = document.querySelector('.popup__input_type_text');
const popupForm = document.querySelector('.popup__form_create');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

//открыываем  popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscape);
}
/*закрываем popup*/
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape);
}
function disabledSubmitButton(popup) {
    const button = popup.querySelector('.popup__submit');
    button.classList.add('popup__submit_disabled');
    button.setAttribute('disabled', true);
}
buttonPopupClose.addEventListener('click', () => {
    closePopup(popupBox);
});

popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileText.textContent = textInput.value;
    disabledSubmitButton(popupBox)
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

const addInputName = document.querySelector('.popup__input_type_title')
const addInputLink = document.querySelector('.popup__input_type_link')
const itemTemplate = document.querySelector('.template').content.querySelector('.element');
const elements = document.querySelector('.elements');

const popupFull = document.querySelector('.popup-full');
const popupFullClose = document.querySelector('.popup-full__close');
const elementFullImg = document.querySelector('.popup__img-full');
const elementFullHeading = document.querySelector('.popup__heading-full');

cardAdd.addEventListener('click', () => {
    openPopup(boxAddImg)
})

//создаем карточку
function createCard(item) {
    const htmlElement = itemTemplate.cloneNode(true);
    const cardName = htmlElement.querySelector('.element__img');
    const cardText = htmlElement.querySelector('.element__text');
    const cardLike = htmlElement.querySelector('.element__button');
    const cardDelete = htmlElement.querySelector('.element__button_basket');
    cardName.src = item.link
    cardName.alt = item.name
    cardText.textContent = item.name

    //удаляем карточку
    cardDelete.addEventListener('click', function () {
        const deleteItem = cardDelete.closest('.element');
        deleteItem.remove();
    });

    //лайк
    cardLike.addEventListener('click', function (event) {
        const like = event.target.closest('.element__button');
        like.classList.toggle('element__button_active');
    });
    //увеличиваем картинку
    cardName.addEventListener('click', function (event) {
        openPopup(popupFull);
        elementFullImg.src = cardName.src;
        elementFullImg.alt = cardName.alt;
        elementFullHeading.textContent = cardName.alt;
    });
    return htmlElement;
};
//перебираем
initialCards.forEach(function (item) {
    const elementCreate = createCard(item)
    elements.prepend(elementCreate)
});

//добавляем карточку
const addFormImg = document.querySelector('.popup__form_place');

addFormImg.addEventListener('submit', (event) => {
    event.preventDefault();
    const addNewElement = {
        name: addInputName.value,
        link: addInputLink.value
    };
    elements.prepend(createCard(addNewElement));
    addFormImg.reset();
    disabledSubmitButton(boxAddImg);
    closePopup(boxAddImg);
})

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