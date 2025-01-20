const ACTIVE_SLIDE_CLASSNAME = 'gallery__slide_active';

const slidesNodes = Array.from(document.querySelectorAll('.gallery__slide'));
let activeId;

init();

function init() {
    activeId = 0;
    setActiveSlideById(activeId);

    // Запускаем автоматическую смену слайдов каждые 3 секунды (3000 мс)
    setInterval(() => {
        setActiveSlideById(getNextId());
    }, 3000);
}

function setActiveSlideById(id) {
    const currentId = activeId; // Сохраняем текущий ID
    activeId = id; // Обновляем активный слайд

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME); // Убираем активный класс у текущего слайда
    slidesNodes[currentId].style.left = '-100%'; // Устанавливаем его влево и делаем невидимым

    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME); // Добавляем активный класс новому слайду
    slidesNodes[activeId].style.left = '0'; // Перемещаем новый слайд на место
}

// Функции для получения предыдущего и следующего ID
function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === (slidesNodes.length - 1) ? 0 : activeId + 1;
}