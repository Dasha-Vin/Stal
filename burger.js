const BURGER_OPENED_CLASSNAME = 'burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
const BODY_FIXED_CLASSNAME2 = 'body_fixed';
const BURGER_CLOSE_CLASSNAME = 'burger_close-btn';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-burger');
const burgerBtnNode = document.querySelector('.js-burger_btn');
const burgerContentNode = document.querySelector('.js-burger_content');
const burgerCloseNode = document.querySelector('.js-burger_close-btn');

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
});

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
};

burgerCloseNode.addEventListener('click', closeBurgerMenu);


function closeBurgerMenu() {
  burgerNode.classList.remove(BURGER_CLOSE_CLASSNAME);
}