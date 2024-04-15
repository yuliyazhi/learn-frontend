
const task = document.querySelector(".our_food");

const food = document.createElement(".some_food");
task.insertAdjacentHTML("beforeend", food);

const btn = document.createElement("btn")
headerNav.innerHTML = `<button id="btn">
<h1>КАКАЯ БЫВАЕТ ЕДА</h1>
</button>`
food.insertAdjacentElement("beforeend", btn);

<button id="btn">
<h1>КАКАЯ БЫВАЕТ ЕДА</h1>
</button>
<div class="some_food">
<div class="sort">

    <h3 class="title">Нажми "1" </h3>

    <div class="vegetables box">
        <h3 class="in-div">ОВОЩИ </h3>
        <div class="veg "><img src="./assets/veg/free-icon-broccoli-5601272.png" alt=""></div>
        <div class="veg"><img src="./assets/veg/free-icon-bell-pepper-4899141.png" alt=""></div>
        <div class="veg"><img src="./assets/veg/free-icon-onion-862847.png" alt=""></div>
        <div class="veg"><img src="./assets/veg/free-icon-carrot-135687.png" alt=""></div>
        <div class="veg"><img src="./assets/veg/free-icon-cabbage-4899142.png" alt=""></div>
    </div>
</div>
<div class="sort">

    <h3 class="title">Нажми "2"</h3>

    <div class="fruits box">
        <h3 class="in-div">ФРУКТЫ </h3>
        <div class="fruit"><img src="./assets/fruits/free-icon-banana-831896.png" alt=""></div>
        <div class="fruit"><img src="./assets/fruits/free-icon-apple-415733.png" alt=""></div>
        <div class="fruit"><img src="./assets/fruits/free-icon-grapefruit-9702184.png" alt=""></div>
        <div class="fruit"><img src="./assets/fruits/free-icon-lemon-8645065.png" alt=""></div>
        <div class="fruit"><img src="./assets/fruits/free-icon-pomegranate-5721996.png" alt=""></div>
    </div>
</div>
<div class="sort">
    <h3 class="title">Нажми "3"</h3>
    <div class="berries box">
        <h3 class="in-div">ЯГОДЫ </h3>
        <div class="berry"><img src="./assets/berries/free-icon-raspberry-3341751.png" alt=""></div>
        <div class="berry"><img src="./assets/berries/free-icon-avocado-4909096.png" alt=""></div>
        <div class="berry"><img src="./assets/berries/free-icon-blueberry-1791354.png" alt=""></div>
        <div class="berry"><img src="./assets/berries/free-icon-strawberry-4899197.png" alt=""></div>
        <div class="berry"><img src="./assets/berries/free-icon-watermelon-5582706.png" alt=""></div>

    </div>
</div>
<div class="sort">
    <h3 class="title">Нажми "B"</h3>
    <div class="bakery box">
        <h3 class="in-div">ВЫПЕЧКА </h3>
        <div class="bake"><img src="./assets/bakery/free-icon-bread-7290918.png" alt=""></div>
        <div class="bake"><img src="./assets/bakery/free-icon-pretzel-5787140.png" alt=""></div>
        <div class="bake"><img src="./assets/bakery/free-icon-croissant-5787330.png" alt=""></div>
        <div class="bake"><img src="./assets/bakery/free-icon-pizza-2674065.png" alt=""></div>
        <div class="bake"><img src="./assets/bakery/free-icon-pancake-2497761.png" alt=""></div>

    </div>
</div>
<div class="sort">
    <h3 class="title">Нажми "M"</h3>
    <div class="milk_food box">
        <h3 class="in-div">МОЛОКО </h3>
        <div class="milk"><img src="./assets/milk/free-icon-milk-684631.png" alt=""></div>
        <div class="milk"><img src="./assets/milk/free-icon-cheese-135652.png" alt=""></div>
        <div class="milk"><img src="./assets/milk/free-icon-yoghurt-7220029.png" alt=""></div>
        <div class="milk"><img src="./assets/milk/free-icon-ice-cream-7704010.png" alt=""></div>
        <div class="milk"><img src="./assets/milk/free-icon-yogurt-3361266.png" alt=""></div>

    </div>
</div>
<div class="sort">
    <h3 class="title">Нажми "D"</h3>
    <div class="drinks box">
        <h3 class="in-div">НАПИТКИ </h3>
        <div class="drink"><img src="./assets/drink/free-icon-hot-drinks-2334737.png" alt=""></div>
        <div class="drink"><img src="./assets/drink/free-icon-coconut-drink-3891870.png" alt=""></div>
        <div class="drink"><img src="./assets/drink/free-icon-coffee-8464806.png" alt=""></div>
        <div class="drink"><img src="./assets/drink/free-icon-soft-drink-2769608.png" alt=""></div>
        <div class="drink"><img src="./assets/drink/free-icon-drinks-917940.png" alt=""></div>

    </div>

</div>
<div class="sort">
    <h3 class="title">Нажми "+"</h3>
    <div class="desserts box">
        <h3 class="in-div">ДЕСЕРТЫ </h3>
        <div class="dessert"><img src="./assets/dessert/free-icon-doughnut-189129.png" alt=""></div>
        <div class="dessert"><img src="./assets/dessert/free-icon-candy-2218714.png" alt=""></div>
        <div class="dessert"><img src="./assets/dessert/free-icon-cotton-candy-4771455.png" alt=""></div>
        <div class="dessert"><img src="./assets/dessert/free-icon-cupcake-135578.png" alt=""></div>
        <div class="dessert"><img src="./assets/dessert/free-icon-chocolate-2363430.png" alt=""></div>

    </div>
</div>
<div class="sort">
    <h3 class="title">Нажми "*"</h3>
    <div class="meat_food box">
        <h3 class="in-div">МЯСО </h3>
        <div class="meat"><img src="./assets/meat/free-icon-meat-1134447.png" alt=""></div>
        <div class="meat"><img src="./assets/meat/free-icon-pepperoni-2718144.png" alt=""></div>
        <div class="meat"><img src="./assets/meat/free-icon-sausage-4672997.png" alt=""></div>
        <div class="meat"><img src="./assets/meat/free-icon-meat-7923166.png" alt=""></div>
        <div class="meat"><img src="./assets/meat/free-icon-kebab-4374099.png" alt=""></div>

    </div>
</div>

<div class="sort">
    <h3 class="title">Нажми "#"</h3>
    <div class="fish_food box">
        <h3 class="in-div">РЫБА </h3>
        <div class="fish"><img src="./assets/fish/free-icon-fish-1833947.png" alt=""></div>
        <div class="fish"><img src="./assets/fish/free-icon-prawns-4381888.png" alt=""></div>
        <div class="fish"><img src="./assets/fish/free-icon-sea-food-1498285.png" alt=""></div>
        <div class="fish"><img src="./assets/fish/free-icon-squid-11317210.png" alt=""></div>
        <div class="fish"><img src="./assets/fish/free-icon-mussel-1137928.png" alt=""></div>
    </div>
</div>


</div>

<div class="description">
<h3 class="show-all">"0" покажет и уберёт всё</h3>
<h3 class="show-all">"5" убирает блоки</h3>
</div>
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

    if (ev.code === "Numpad1") {
        vegetables.classList.toggle('visiable')
    };

    if (ev.code === "Numpad2") {

        fruits.classList.toggle("visiable")

        // fruits.classList.add("visiable")
        // else if ((ev.code === "Numpad2") && (fruits.class = "visiable")) {
        //     fruits.classList.remove("visiable")};

    } else if ((ev.code === "Numpad2") && (fruits.class = "visiable")) {
        fruits.classList.remove("visiable");
    };


    if (ev.code === "Numpad3") {
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

    if (ev.code === "NumpadAdd") {
        desserts.classList.toggle("visiable")

    };

    if (ev.code === "Digit3") {
        fish_food.classList.toggle("visiable")

    };

    if (ev.code === "NumpadMultiply") {
        meat_food.classList.toggle("visiable")

    };

    if (ev.code === "Numpad0") {
        food.classList.toggle("visiable")
    };

    if (ev.code === "Numpad5") {
        box.forEach((e) => e.classList.remove("visiable"))

    };

})

btn.addEventListener("click", () => {
    title.forEach((e) => e.classList.toggle("vis"))
    showAll.forEach((e) => e.classList.toggle("vis"))

});

