import {itemsData} from "./itemsData.js"

const mainBox = document.querySelector(".main-box");
const titleText = "Лучшие бесплатные приложения для прослушивания музыки без WiFi (2024 г.)"
const title = createTitle(titleText);
const itemsList = createItemsList("items-list");
const addApp = mainBox.querySelector(".add-app");
const addButton = addApp.querySelector(".add-btn");
const newItem = addApp.querySelector(".new-item");
const newAppBtn = addApp.querySelector(".new-btn");

newAppBtn.addEventListener("click",()=>{

  const newTitle = newItem.querySelector(".new-title");
  const title = newTitle.value;
  const newImage = newItem.querySelector(".new-image");
  const image = newImage.value;
  const newLink = newItem.querySelector(".new-link");
  const link = newLink.value;
  const newDescription = newItem.querySelector(".new-description");
  const description = newDescription.value;

  const newApp={
    id: Date.now(),
    image,
    link,
    title,
    description, 
  }
  itemsData.push(newApp);
});

mainBox.append(title, itemsList);
renderItemList(itemsData, itemsList);

addButton.addEventListener("click", showAdd);
function showAdd() {
  newItem.style.display = 'flex';
    
}

function createTitle(titleText, teg, className){
  const title = document.createElement(teg || "h1");
  title.textContent = `${titleText}`;
  if(className){
    title.classList.add(className);
   }
    return title;
}

function createItemsList(className){
    const elem = document.createElement("div");
    elem.classList.add(className);
    return elem;
        
}

function renderItemList (itemsData, element){
    itemsData.forEach((item) => {

    const itemHTML = `<article class="cartoons">
     <section class="item">
        <a href="${item.link}"> <img class="picture" src="${item.image}"></img></a>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
         
    </section>

    <a class="link" href="${item.link}"> Хочу установить</a>
   </article>`

  element.insertAdjacentHTML("beforeend", itemHTML);

});

}











// вариант2

// const itemList = document.querySelector(".items-list");

// const mainTitleHTML = `<div><h1>Лучшие бесплатные приложения для прослушивания музыки без WiFi (2024 г.)</h1></div> `;
// itemList.insertAdjacentHTML("afterbegin", mainTitleHTML);

// const boxElem = document.createElement("div");
// itemList.insertAdjacentElement("beforeend", boxElem);
// boxElem.classList.add("main_box");

// const itemsData = [
//     {
//         id: 1,
//         image: "./assets/images/lark.webp",
//         link: "https://play.google.com/store/apps/details?id=com.dywx.larkplayer&hl=ru&gl=US",
//         title: " Lark Player",
//         description: "Lark Player оптимальное музыкальное приложение оффлайн. Он имеет все функции, которые вам когда-либо понадобятся, и красивый интерфейс. Вы можете легко просматривать и управлять всеми музыкальными файлами на своем мобильном телефоне. При прослушивании тексты песен синхронизируются в режиме реального времени, обеспечивая плавное и потрясающее впечатление от прослушивания.",
//     },
//     {
//         id: 2,
//         image: "./assets/images/audiomack.webp",
//         link: "https://play.google.com/store/apps/details?id=com.audiomack&hl=en_US",
//         title: "Audiomack",
//         description: "Audiomack позволяет скачивать любимые песни и слушать их оффлайн, без необходимости подключения к Wi-Fi и бесплатно. Приложение знакомит вас с различными песнями, сборниками и альбомами. Audiomack позволяет бесплатно загружать неограниченное количество музыки, показывает песни, популярные во всем мире, и позволяет загружать их для прослушивания, когда у вас больше нет подключения к Wi-Fi.",
//     },
//     {
//         id: 3,
//         image: "./assets/images/iheart.webp",
//         link: "https://play.google.com/store/apps/details?id=com.thisisglobal.player.heart",
//         title: "Heart Radio App",
//         description: "Это приложение, которое работает так же, как текущее радио, предлагает такие функции, как выбор любимой песни или исполнителя и создание пользовательских станций с помощью «Избранное радио«; сохраняйте любимые радиостанции в свою библиотеку, находите идеальный саундтрек для пробуждения, бодрствования, тренировки или отдыха и многого другого!",
//     },

//     {
//         id: 4,
//         image: "./assets/images/pulsar.webp",
//         link: "https://play.google.com/store/apps/details?id=com.rhmsoft.pulsar&hl=ru&gl=US",
//         title: "Pulsar",
//         description: "Pulsar музыкальный плеер. Это бесплатно и просто в использовании. Вам понравится использовать это приложение благодаря его уникальному интерфейсу. Приложение также ищет музыкальные файлы в папках вашего телефона и добавляет их в ваши плейлисты. Приложение полностью поддерживает Chromecast, оснащено таймером сна и дает вам полный контроль над тем, как вы хотите слушать музыку. Обязательно попробуйте Pulsar Music Player, чтобы получить бесплатный доступ к Wi-Fi.",
//     },
//     {
//         id: 5,
//         image: "./assets/images/palco.webp",
//         link: "https://play.google.com/store/apps/details?id=com.studiosol.palcomp3&hl=ru&gl=US",
//         title: "Palco MP3",
//         description: "Palco MP3 находится на вершине 17 списков из-за удобной формы использования и музыкальной коллекции. Palco MP3 дает вам доступ к бесчисленным бесплатным песням, позволяя вам загружать и слушать их оффлайн, даже без WiFi. Ваши плейлисты организованы, и они показывают вам песни в соответствии с рейтингом. Palco MP3 — один из тех, которые вы должны проверить, чтобы получить бесплатную музыку для тех времен, когда нет интернета. ",
//     },
//     {
//         id: 6,
//         image: "./assets/images/musicolet.webp",
//         link: "https://play.google.com/store/apps/details?id=in.krosbits.musicolet&hl=ru&gl=US",
//         title: "Musicolet Music Player",
//         description: "Musicolet бесплатно позволяет вам наслаждаться локальными аудиофайлами, когда у вас нет подключения к Wi-Fi. Вы можете наслаждаться плавным и беспрепятственным звуком. Эквалайзер поможет вам настроить музыку в соответствии с вашим вкусом.<br> Оснащен функцией множественной очереди, что позволяет Вам ставить в очередь до 20 трэков. Дополнительные функции: редактирование этикеток, таймер сна, виджеты и больше.",
//     },
//     {
//         id: 7,
//         image: "./assets/images/black.webp",
//         link: "https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree",
//         title: "BlackPlayer",
//         description: "Palco MP3 находится на вершине 17 списков из-за удобной формы использования и музыкальной коллекции. Palco MP3 дает вам доступ к бесчисленным бесплатным песням, позволяя вам загружать и слушать их оффлайн, даже без WiFi. Ваши плейлисты организованы, и они показывают вам песни в соответствии с рейтингом. Palco MP3 — один из тех, которые вы должны проверить, чтобы получить бесплатную музыку для тех времен, когда нет интернета. ",
//     },
//     {
//         id: 8,
//         image: "./assets/images/foldplay.webp",
//         link: "https://play.google.com/store/apps/details?id=net.pnhdroid.foldplay",
//         title: "Foldplay",
//         description: "Foldplay — один из самых простых музыкальных плееров, для прослушивания музыки. оффлайн. Он поставляется с множеством различных вариантов настройки для вашего прослушивания музыки, а также его интерфейса. Foldplay отдает приоритет исполнению песни и дисплей слоев; и поэтому вам понравится пользоваться Foldplay и без Wi-Fi."

//     },
//     {
//         id: 9,
//         image: "./assets/images/Spotify.webp",
//         link: "https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree",
//         title: "Spotify",
//         description: "Spotify — ведущий сервис потоковой передачи музыки на рынке. Он поставляется с простым интерфейсом, идеально подходящим для новичков. Позволяет пользователю наслаждаться бесплатными песнями без WiFi, поскольку предлагает бесплатную версию. Тем не менее, бесплатная версия также поставляется с рекламными баннерами при запуске приложения и позволяет слушать со скоростью 160 Кбит/с. ",
//     },
//     {
//         id: 10,
//         image: "./assets/images/JRT.webp",
//         link: "https://play.google.com/store/apps/details?id=net.pnhdroid.foldplay",
//         title: "Rocket Music Player",
//         description: "Rocket Music Player — это популярный музыкальный плеер для устройств Android, который предлагает широкий набор функций и интуитивно понятный интерфейс. Это отличное приложение для всех, кто любит слушать музыку на своем мобильном устройстве, включая профессиональных музыкантов, аудиофилов и обычных пользователей."

//     },

// ]


// itemsData.forEach((item) => {

//     const itemHTML = `<article class="cartoons">
//      <section class="item">
//         <a href="${item.link}"> <img class="picture" src="${item.image}"></img></a>
//         <h3>${item.title}</h3>
//         <p>${item.description}</p>
         
//     </section>

//     <a class="link" href="${item.link}"> Хочу установить</a>
//    </article>`

//     boxElem.insertAdjacentHTML("beforeend", itemHTML);

// });


