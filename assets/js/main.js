let form = document.getElementById("form")
let input = document.getElementById("input")
let thx = document.getElementById("thankYou")

function send() {
    console.log(input.value);
    form.style.display = "none"
    thx.style.display = "block"

}