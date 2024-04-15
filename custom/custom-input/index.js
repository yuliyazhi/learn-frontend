const myInput = document.querySelector(".my-input");
const customInput = myInput.querySelector(".custom-input");
const textElem = customInput.querySelector(".text")
const input = myInput.querySelector("#input");


input.addEventListener("input", (ev) => {
    textElem.textContent = ev.target.value;
});

customInput.addEventListener("click", () => {
    input.focus();

});

input.addEventListener("focus", () => {
    textElem.classList.add("focus");

});
input.addEventListener("blur", () => {
    textElem.classList.remove("focus");

});

input.addEventListener("keydown", (ev) => {

    console.log(ev.code)
})