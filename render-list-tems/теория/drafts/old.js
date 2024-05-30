import { itemsData } from "./items-data.js"

const mainBox = document.querySelector(".main-box");
const titleText = "Лучшие бесплатные приложения для прослушивания музыки без WiFi (2024 г.)";
// const formInputs = mainBox.querySelectorAll(".new");
const addBtn = createAddBtn();
const title = createTitle(titleText);
const itemsList = createItemsList("items-list");
const popup = createPopup();

const newItemFormHTML = `

    <div class="new-item">
        <input type="text" class="new-title new" placeholder="Название приложения">
        <textarea name="Описание" id="" class="new-description  new" cols="30" rows="10"
            placeholder="Введите описание"></textarea>
        <input type="text" class="new-link new" placeholder="Ссылка на приложение в магазине">
        <input type="text" class="new-image new" placeholder="Ссылка на картинку">
        <button class="new-btn black">Добавить</button> 
    </div>`;
popup.insertAdjacentHTML("beforeend", newItemFormHTML);

mainBox.append(addBtn, title, itemsList, popup);
renderItemList(itemsData, itemsList); /*заполнение списка данными*/

const addButton = mainBox.querySelector(".add-btn");
addButton.addEventListener("click", showPopup);

popup.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("popup")) {
        showPopup();
    }
});

const newItem = popup.querySelector(".new-item");
const newAppBtn = newItem.querySelector(".new-btn");
newAppBtn.addEventListener("click", createNewAppCard);
// newAppBtn.addEventListener("click", showPopup);

function createNewAppCard() {

    const newTitle = newItem.querySelector(".new-title");
    const newImage = newItem.querySelector(".new-image");
    const newLink = newItem.querySelector(".new-link");
    const newDescription = newItem.querySelector(".new-description");

    const title = newTitle.value;
    const image = newImage.value;
    const link = newLink.value;
    const description = newDescription.value;

    const newApp = {
        id: Date.now(),
        image,
        link,
        title,
        description,
    }

    itemsData.push(newApp);

    //1 СПОСОБ. отрисовка новой карточки без перерисовки всего списка. Более оптимальный способ.
    //Функция добавляет в конец списка 1 элемент. 

    renderItem(newApp, itemsList);

    //renderItem(newApp /*передаем данные*/ , itemsList/*передаем элемент куда добавляем карточку*/);
    //Для этого способа возможны 2 варианта функций:

    //  1 вариант
    // function renderItemList(itemsData, element) {
    //   itemsData.forEach((item) => renderItem(item, element));
    // }

    //  2 вариант
    // function renderItemList(itemsData, element) {

    //   /* 1 шаг  -очищаем список */
    //   while (element.firstChild) {
    //     element.firstChild.remove();/*вызвать метод remove имеено у дочернего элемента */
    //   }
    //   /* 2 шаг  - заполняем список */
    //   itemsData.forEach((item) => renderItem(item, element));
    // }

    // *****************************************
    /*2 СПОСОБ. отрисовка новой карточки с перерисовкой всего списка.  Более затратный способ. но тоже используется.
    Пока будет находится внутри списка хоть какой-то дочерний элемент, мы его будем удалять, как список станет пуст,
    цикл прекращает свою работу и начинает работать 2 шаг.
    Функция перерисовывает весь список при любом изменении*/

    // renderItemList(itemsData, itemsList);
    //  здесь только 2 вариант подходит. Если использовать первый будет дублироваться весь список.

    newTitle.value = "";
    newImage.value = "";
    newLink.value = "";
    newDescription.value = "";
};

function showPopup() {
    popup.classList.toggle("hidden");

    const isVisiblePopup = !popup.classList.contains("hidden");
    if (isVisiblePopup) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }
}


function createAddBtn() {
    const addNewApp = document.createElement("div");
    addNewApp.classList.add("add-app");

    const addNewAppHTML = ` <button class="add-btn white">Добавить новое приложение</button>`;

    addNewApp.insertAdjacentHTML("beforeend", addNewAppHTML)

    return addNewApp;
}

function createTitle(titleText, teg, className) {
    const title = document.createElement(teg || "h1");
    title.textContent = `${titleText}`;
    if (className) {
        title.classList.add(className);
    }
    return title;
}

function createPopup() {
    const popupElem = document.createElement("div");
    popupElem.classList.add("popup", "hidden");
    return popupElem;
}


function createItemsList(className) {
    const elem = document.createElement("div");
    elem.classList.add(className);
    return elem;

}


/*Способ 1. Более затратный, но тже применяется.
 пока будет находится внутри списка хоть какой-то дочерний элемент, мы его будем удалть, как список станет пуст,
цикл прекращает свою работу и начинает работать 2 шаг.
Функция перерисовывает весь список при любом изменении*/

/*если нужно отрисовать весь список*/
function renderItemList(itemsData, element) {

    /* 1 шаг  -очищаем список */
    while (element.firstChild) {
        element.firstChild.remove();/*вызвать метод remove имеено у дочернего элемента */
    }
    /* 2 шаг  - заполняем список */
    itemsData.forEach((item) => renderItem(item, element));
}

/*Способ 2. Более быстрый.
Функция добавляет в конец списка 1 элемент*/

// function renderItemList (itemsData, element){
//   itemsData.forEach((item) => renderItem(item, element));
// }

/*если нужно отрисовать 1 элемент*/
function renderItem(item, element) {
    const itemHTML = `<article class="cartoons">
     <section class="item">
        <a href="${item.link}"> <img class="picture" src="${item.image}"></img></a>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
         
    </section>

    <a class="link" href="${item.link}"> Хочу установить</a>
   </article>`

    element.insertAdjacentHTML("beforeend", itemHTML);
};
