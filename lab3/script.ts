import PrinterModel from "./models/PrinterModel";

// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)

let records: PrinterModel[] = [];

function openModal(id: string) {
    console.log("openModal", id);
    document.getElementById(id).style.display = 'block';
}

function closeModal(id: string) {
    console.log("closeModal", id);
    document.getElementById(id).style.display = 'none';
}


function removeAnimal(button) {
    const card = button.closest('.animal-card');
    card.remove();
}


window.onclick = function (event) {
    const modal = document.getElementById('animalModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
