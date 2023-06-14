(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var r=function(){function e(t,r,o){var i,u,a,c=this,l=t.data,s=t.handleCardClick,f=t.handleDeleteClick,p=t.handleSetLike,y=t.handleDeleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,a=function(){c._element&&(c._element.remove(),c._element=null)},(u=n(u="deleteCard"))in i?Object.defineProperty(i,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[u]=a,this._templateSelector=r,this._handleCardClick=s,this._handleSetLike=p,this._handleDeleteLike=y,this._handleDeleteClick=f,this._data=l,this._name=l.name,this._link=l.link,this._cardId=l._id,this._userId=o,this._ownerId=l.owner._id,this._likes=l.likes}var r,o;return r=e,(o=[{key:"_createCardTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"getCard",value:function(){return this._element=this._createCardTemplate(),this._cardImage=this._element.querySelector(".element__img"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__text").textContent=this._name,this._deleteButton=this._element.querySelector(".element__button_basket"),this._cardLikeButton=this._element.querySelector(".element__button"),this._likeCounter=this._element.querySelector(".element__counter-likes"),this._likeCounter.textContent=this._likes.length,this._ownerId!==this._userId&&this._deleteButton.remove(),this._checkLikedState(),this._setEventListeners(),this._element}},{key:"handleLike",value:function(e){this._likes=e.likes,this._likeCounter.textContent=this._likes.length,this._cardLikeButton.classList.toggle("element__button-active")}},{key:"_checkLikedState",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._userId&&e._cardLikeButton.classList.add("element__button-active")}))}},{key:"getId",value:function(){return this._cardId}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)})),this._cardLikeButton.addEventListener("click",(function(){e._cardLikeButton.classList.contains("element__button-active")?e._handleDeleteLike(e._cardId):e._handleSetLike(e._cardId)}))}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function u(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(r.validatorConfig.inputErrorClass),n.textContent=t,n.classList.add(r.validatorConfig.errorClass)})),u(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r.validatorConfig.inputErrorClass),t.classList.remove(r.validatorConfig.errorClass),t.textContent=""})),this.validatorConfig=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this.validatorConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this.validatorConfig.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonStatus(),this._formElement.addEventListener("reset",(function(){setTimeout((function(){e._toggleButtonStatus()}),0)})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonStatus()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonStatus",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this.validatorConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled","true")):(this._buttonElement.classList.remove(this.validatorConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonStatus(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const l=c;function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"newAddItem",value:function(e){this._container.prepend(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}var m=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=d(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._title=t._popup.querySelector(".popup__heading-full"),t._image=t._popup.querySelector(".popup__img-full"),t}return t=u,(n=[{key:"open",value:function(e,t){_(g(u.prototype),"open",this).call(this),this._title.textContent=e,this._image.src=t,this._image.alt=e}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._popupFormInputs=Array.from(n._popup.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._popupFormInputsValues={},this._popupFormInputs.forEach((function(t){e._popupFormInputsValues[t.name]=t.value})),this._popupFormInputsValues}},{key:"close",value:function(){j(C(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;j(C(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"submitCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;R(q(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var U=function(){function e(t){var n=t.selectorUserName,r=t.selectorUserAbout,o=t.selectorUserAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=n,this._userAboutElement=r,this._userAvatarElement=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userAboutElement.textContent,avatar:this._userAvatarElement.src}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._userNameElement.textContent=t,this._userAboutElement.textContent=n,this._userAvatarElement.src=r}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialsCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getDataUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserData",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addNewPhotocard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e,t){e.querySelector(".popup__submit").textContent=t}var J=document.querySelector(".profile__popup"),H=document.querySelector(".popup_create"),M=document.querySelector(".popup__input_type_name"),z=document.querySelector(".popup__input_type_text"),G=document.querySelector(".profile__name"),$=document.querySelector(".profile__text"),K=document.querySelector(".profile__avatar"),Q=document.querySelector(".popup-full"),W=document.querySelector(".elements"),X=document.querySelector(".profile__button-plus"),Y=document.querySelector(".popup_place"),Z=document.querySelector(".profile__photo"),ee=document.querySelector(".popup_avatar"),te=document.querySelector(".popup_confirmation"),ne={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"};function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var oe=0,ie=new F({url:"https://mesto.nomoreparties.co/v1/cohort-68",headers:{authorization:"e0cc1650-18be-49f9-89e7-3eeb4201f8b2","Content-Type":"application/json"}});Promise.all([ie.getDataUser(),ie.getInitialsCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];oe=o._id,se.setUserInfo(o),le.renderItems(i)})).catch((function(e){console.log(e)}));var ue=new k(Q);ue.setEventListeners();var ae=new A(te);function ce(e){var t=new r({data:e,handleCardClick:function(e,t){ue.open(e,t)},handleDeleteClick:function(){ae.open(),ae.submitCallback((function(){N(te,"Удаление..."),ie.deleteCard(t.getId()).then((function(){t.deleteCard(),ae.close()})).catch((function(e){console.log("deleteCard - ошибка: ".concat(e))})).finally((function(){N(te,"Да")}))}))},handleSetLike:function(e){ie.setLike(e).then((function(e){t.handleLike(e)})).catch((function(e){console.log("handleSetLike - ошибка: ".concat(e))}))},handleDeleteLike:function(e){ie.deleteLike(e).then((function(e){t.handleLike(e)})).catch((function(e){console.log("handleDeleteLike - ошибка: ".concat(e))}))}},".template",oe);return t.getCard()}ae.setEventListeners();var le=new p({renderer:function(e){le.addItem(ce(e))}},W),se=new U({selectorUserName:G,selectorUserAbout:$,selectorUserAvatar:K}),fe=new P(H,{handleFormSubmit:function(e){N(H,"Cохранение..."),ie.setUserData(e).then((function(e){se.setUserInfo(e),fe.close()})).catch((function(e){console.log("setDataUser - ошибка: ".concat(e))})).finally((function(){N(H,"Сохранить")}))}});fe.setEventListeners(),J.addEventListener("click",(function(){he.resetValidation(),fe.open();var e=se.getUserInfo();M.value=e.name,z.value=e.about}));var pe=new P(ee,{handleFormSubmit:function(e){N(ee,"Сохранение..."),ie.setUserAvatar(e).then((function(e){se.setUserInfo(e),pe.close()})).catch((function(e){console.log("setUserAvatar - ошибка: ".concat(e))})).finally((function(){N(ee,"Сохранить")}))}});pe.setEventListeners(),Z.addEventListener("click",(function(){me.resetValidation(),pe.open()}));var ye=new P(Y,{handleFormSubmit:function(e){N(Y,"Сохранение..."),ie.addNewPhotocard(e.nameImg,e.linkImg).then((function(e){le.newAddItem(ce(e)),ye.close()})).catch((function(e){console.log("addNewCard - ошибка: ".concat(e))})).finally((function(){N(Y,"Создать")}))}});ye.setEventListeners(),X.addEventListener("click",(function(){de.resetValidation(),ye.open()}));var he=new l(ne,H);he.enableValidation();var de=new l(ne,Y);de.enableValidation();var me=new l(ne,ee);me.enableValidation()})();