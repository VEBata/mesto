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
}
/*закрываем popup*/
function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
    nameInput.value = '';
    textInput.value = '';
})

const cardAdd = document.querySelector('.profile__button-plus')
const boxAddImg = document.querySelector('.popup_place')
const boxCloseImg = document.querySelector('.popup__close_place')

boxCloseImg.addEventListener('click', () => {
    closePopup(boxAddImg)
})

const nameInputAdd = document.querySelector('.popup__input_type_title')
const linkInputAdd = document.querySelector('.popup__input_type_link')

cardAdd.addEventListener('click', () => {
    openPopup(boxAddImg)
    nameInputAdd.value = ''
    linkInputAdd.value = ''
})

// лайк
function clickLike(blackHeart) {
    const like = blackHeart.target.closest('.element__button');
        like.classList.toggle('element__button_active');
}

//  удаление карточки
function basketDelete(basket) {
        const basketDelete = basket.target.closest('.element');
        basketDelete.remove();
}

const elementFullImg = document.querySelector('.popup-full__img')
const elementFullHeading = document.querySelector('.popup-full__heading')

// добавляет фулскрин на картинки
function addFullImg(event) {
    const elementImg = event.target.closest('.element__img')
    openPopup(popupFull)
    elementFullImg.src = elementImg.src
    elementFullImg.alt = elementImg.alt
    elementFullHeading.textContent = elementImg.alt
}

const itemTemplate = document.querySelector('.template').content
const elements = document.querySelector('.elements')
const popupFull = document.querySelector('.popup-full')
const popupFullClose = document.querySelector('.popup-full__close')

function setEventListeners(htmlElement) {
    htmlElement.querySelector('.element__button_basket').addEventListener('click', basketDelete)
    htmlElement.querySelector('.element__button').addEventListener('click', clickLike)
    htmlElement.querySelector('.element__img').addEventListener('click', addFullImg)
}

//создаем карточку
function createCard(item) {
    const htmlElement = itemTemplate.cloneNode(true)
    const cardName = htmlElement.querySelector('.element__img')
    const cardAlt = htmlElement.querySelector('.element__img')
    const cardText = htmlElement.querySelector('.element__text')
    cardName.src = item.link
    cardAlt.alt = item.name
    cardText.textContent = item.name
    setEventListeners(htmlElement)
    return htmlElement
}

initialCards.forEach(function (item) {
    const elementCreate = createCard(item)
    elements.prepend(elementCreate)
});

//добавляем карточку
const popupFormImg = document.querySelector('.popup__form_place');

popupFormImg.addEventListener('submit', (event) => {
    event.preventDefault();
    const elementAddNew = {
        name: nameInputAdd.value,
        link: linkInputAdd.value
    };
    elements.prepend(createCard(elementAddNew));
    closePopup(boxAddImg);
})

popupFullClose.addEventListener('click', () => {
    closePopup(popupFull);
})
