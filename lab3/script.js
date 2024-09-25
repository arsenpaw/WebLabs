"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var RecordModel_1 = require("./models/PrinterModel");
var records = [
    new PrinterModel.default(1, "Dog", "A dog is a type of domesticated animal. Known for its loyalty and faithfulness.", "https://www.pexels.com/photo/adorable-animal-blur-canine-356378/")
];

function openModal(id) {
    console.log("openModal", id);
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    console.log("closeModal", id);
    document.getElementById(id).style.display = 'none';
}

function removeAnimal(button) {
    var card = button.closest('.animal-card');
    card.remove();
}

window.onclick = function (event) {
    var modal = document.getElementById('animalModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
