
const example1 = document.querySelector(".example-1");
const myInput1 = example1.querySelector(".myinput1");
const input1 = myInput1.querySelector("#input1");
const button1 = myInput1.querySelector(".btn1");
const resultElem1 = example1.querySelector(".result1")

button1.addEventListener("click", () => {
    const text = input1.value

    if (text) {
        resultElem1.textContent = text;
    }
    input1.value = "";
});

const example2 = document.querySelector(".example-2");
const myInput2 = example2.querySelector(".myinput2");
const input2 = example2.querySelector(".input2");
const inputLogin = myInput2.querySelector("#input-login");
const inputAge = myInput2.querySelector("#input-age");
const inputSubject = myInput2.querySelector("#input-subject");
const button2 = myInput2.querySelector(".btn2");
const resultElem2 = example2.querySelector(".result2")

button2.addEventListener("click", () => {
    // const textHTML = `Логин: ${inputLogin.value}.
    //     Возраст: ${inputAge.value}.
    //     Направление: ${inputSubject.value}.`;
    const textHTML = `<span class="title">Логин: <span class="value">${inputLogin.value}</span>.</span>
    <span class="title">Возраст: <span class="value">${inputAge.value}</span>.</span>
    <span class="title">Направление: <span class="value">${inputSubject.value}</span>.</span>`

    resultElem2.insertAdjacentHTML("beforeend", textHTML)

    inputLogin.value = "";
    inputAge.value = "";
    inputSubject.value = "";
});

const example3 = document.querySelector(".example-3");
const myInput3 = example3.querySelector(".myinput3");
const input3 = myInput3.querySelector("#input3");
const resultElem3 = example3.querySelector(".result3")

input3.addEventListener("input", (ev) => {
    // console.log(ev.target.value);
    const text = input3.value;

    resultElem3.textContent = ev.target.value;


});