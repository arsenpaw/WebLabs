import PrinterModel from "./models/PrinterModel";

// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)

let records: PrinterModel[] = [
    new PrinterModel(1, "Dog", "A dog is a type of domesticated animal. Known for its loyalty and faithfulness.",
        "https://www.pexels.com/photo/adorable-animal-blur-canine-356378/")
];

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
