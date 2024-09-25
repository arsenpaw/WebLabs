"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)
var records = [];
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
