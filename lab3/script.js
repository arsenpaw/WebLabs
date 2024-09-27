"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrinterModel_1 = require("./models/PrinterModel");
// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)
var records = [new PrinterModel_1.default('HP', 10, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww8.hp.com%2Fua%2Fuk%2Fhome.html&psig=AOvVaw3Q6Z', 4)];
function openModal(id) {
    var element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
    }
}
function closeModal(id) {
    var elementHide = document.getElementById(id);
    if (elementHide) {
        elementHide.classList.add('hidden');
    }
}
function OnSubmit(event) {
    var form = document.getElementById('printerCreateForm');
    event.preventDefault();
    var formData = new FormData(form);
    // Access form data by field names
    var title = formData.get('Title');
    var pps = parseFloat(formData.get('PPS'));
    var cost = parseFloat(formData.get('Cost'));
    var imageUrl = formData.get('imageUrl');
    console.log(records);
    records.push(new PrinterModel_1.default(title, pps, imageUrl, cost));
    form.reset();
    closeModal('createPrinterModal');
}
var drawList = function (list) {
    var mainPageShow = document.getElementById('main-page');
    if (!mainPageShow) {
        return;
    }
    mainPageShow.innerHTML = '';
    list.forEach(function (el, idx) {
        mainPageShow.innerHTML += "\n            <section class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 printer-cards\">\n            <div class=\"printer-card bg-white rounded-lg shadow-md overflow-hidden\">\n                <div class=\"printer-image\">\n                    <img src=\"".concat(el.imgUrl, "\" alt=\"Printer Image\" class=\"w-full h-48 object-cover\">\n                </div>\n                <div class=\"printer-info p-4\">\n                    <h4 class=\"text-xl font-semibold\">").concat(el.name, "</h4>\n                    <p class=\"text-gray-600\">Speed: ").concat(el.pagePerMinute, " pages per minute</p>\n                    <p class=\"text-gray-600\">Price: \u20B4").concat(el.cost, "</p>\n                </div>\n                <div class=\"printer-actions flex justify-between p-4\">\n                    <button class=\"edit-btn bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600\" onclick=\"openModal('edit-printer')\">Edit</button>\n                    <button class=\"remove-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600\" onclick=\"removePrinter(").concat(idx, ")\">Remove</button>\n                </div>\n            </div>\n        </section>\n        ");
    });
};
