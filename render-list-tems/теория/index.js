


const itemList = document.querySelector(".items-list")

// const itemHTML = `<section class="item">
//     <h3>Item 1</h3>
//     <p>Text_1</p>
// </section>`;

// itemList.insertAdjacentHTML("beforeend", itemHTML);



const itemsData = [
    {
        id: 1,
        title: "Item_1",
        description: "Description_1",
    },
    {
        id: 2,
        title: "Item_2",
        description: "Description_2",
    },
    {
        id: 3,
        title: "Item_3",
        description: "Description_3",
    },

]
// вариант №1

// const itemsHTML = itemsData.map((item) => {
//     const itemHTML1 = `<section class="item">
//     <h3>${item.title}</h3>
//     <p>${item.description}</p>
// </section>`

//     return itemHTML1;
// })

// itemList.insertAdjacentHTML("beforeend", itemsHTML.join(""));



// вариант №2

itemsData.forEach((item) => {
    const itemHTML1 = `<section class="item">
    <h3>${item.title}</h3>
    <p>${item.description}</p>
</section>`

    itemList.insertAdjacentHTML("beforeend", itemHTML1);
});


