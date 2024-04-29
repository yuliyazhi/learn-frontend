
const task = document.querySelector(".our_food");
const food = task.querySelector(".some_food");
const vegetables = food.querySelector(".vegetables");
const fruits = food.querySelector(".fruits");
const bakery = food.querySelector(".bakery");
const berries = food.querySelector(".berries");
const desserts = food.querySelector(".desserts");
const drinks = food.querySelector(".drinks");
const milk_food = food.querySelector(".milk_food");
const meat_food = food.querySelector(".meat_food");
const meat = meat_food.querySelectorAll(".meat")
const fish_food = food.querySelector(".fish_food");
const box = food.querySelectorAll(".box");
const btn = task.querySelector("#btn");
const title = task.querySelectorAll(".title");
const showAll = task.querySelectorAll(".show-all");

window.addEventListener("keydown", (ev) => {

    if (ev.code === "Digit1") {
        vegetables.classList.toggle('visiable')

    };

    if (ev.code === "Digit2") {

        fruits.classList.toggle("visiable")

        // fruits.classList.add("visiable")
        // else if ((ev.code === "Numpad2") && (fruits.class = "visiable")) {
        //     fruits.classList.remove("visiable")};

    }
    // else if ((ev.code === "Numpad2") && (fruits.class = "visiable")) {
    //     fruits.classList.remove("visiable");
    // };


    if (ev.code === "Digit3") {
        berries.classList.toggle("visiable")

    };
    if (ev.code === "KeyD") {
        drinks.classList.toggle("visiable")
    };

    if (ev.code === "KeyB") {
        bakery.classList.toggle("visiable")

    };
    if (ev.code === "KeyM") {
        milk_food.classList.toggle("visiable")

    };

    if (ev.code === "KeyS") {
        desserts.classList.toggle("visiable")

    };

    if (ev.code === "KeyA") {
        meat_food.classList.toggle("visiable")


    };

    if (ev.code === "KeyQ") {
        fish_food.classList.toggle("visiable")

    };

    if (ev.code === "Digit0") {
        food.classList.toggle("visiable")
    };

    if (ev.code === "Minus") {
        box.forEach((e) => e.classList.remove("visiable"))

    };

})

// 2 вариант





btn.addEventListener("click", () => {
    title.forEach((e) => e.classList.toggle("visiable"))
    showAll.forEach((e) => e.classList.toggle("visiable"))
    box.forEach((e) => e.classList.remove("visiable"))
    food.classList.remove("visiable")

});

