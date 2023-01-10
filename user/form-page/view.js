import Controller from "./controller.js";

const controller = new Controller();
const form = document.getElementById('form');
const name = document.getElementById('user_name');
const email = document.getElementById('email');
const phone_number = document.getElementById('phn-number');

form.addEventListener('submit', (e) => {
    e.preventDefault()
        controller.setArray(name.value, email.value, phone_number.value)
        form.reset();
        console.log(controller.getArray());
})  