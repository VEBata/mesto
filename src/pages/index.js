import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithFrom.js";
import UserInfo from "../components/UserInfo.js";
import initialCards from "../utils/cards.js";

import {
  profileOpenButton,
  profilePopup,
  nameInput,
  textInput,
  profileName,
  profileText,
  popupFull,
  elements,
  boxAddImg,
  cardAdd,
  validatorConfig
} from "../utils/constants.js"

const popupPhotocardImage = new PopupWithImage(popupFull);

popupPhotocardImage.setEventListeners();

function createCard(item){
  const card = new Card({
    data: item,
    handleCardClick: (name,link) =>{
      popupPhotocardImage.open(name,link);
    }
  },'.template');
  const cardElement = card.getCard();
  return cardElement;
};

const cardsContainer = new Section({
  items: initialCards,
  renderer: (item) =>{
    cardsContainer.addItem(createCard(item))
  },
},elements);

cardsContainer.renderItems()

const userInfo = new UserInfo({ name: profileName, description: profileText});

const popupProfileForm = new PopupWithForm( profilePopup,{
  handleFormSubmit: (input) => {
    const data = {
      name: input['name'],
      description: input['text']
    }
    userInfo.setUserInfo(data);
  }
});
popupProfileForm.setEventListeners();

profileOpenButton.addEventListener('click',() =>{
  profileValidator.resetValidation();
  popupProfileForm.open();
  const input = userInfo.getUserInfo();
  nameInput.value = input.name;
  textInput.value = input.description;
});

const popupAddImgForm = new PopupWithForm( boxAddImg,{
  handleFormSubmit: (input) => {
    const data = {
      name: input['nameImg'],
      link: input['linkImg']
    }
    cardsContainer.newAddItem(createCard(data));
  }
});
popupAddImgForm.setEventListeners();

cardAdd.addEventListener('click',() =>{
  popupAddImgForm.open();
  cardValidator.resetValidation();
});

const profileValidator = new FormValidator(validatorConfig, profilePopup);
profileValidator.enableValidation();

const cardValidator = new FormValidator(validatorConfig, boxAddImg);
cardValidator.enableValidation();