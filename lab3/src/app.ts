import PrinterModel from "./interfaces/PrinterModel"
// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)

const printers: PrinterModel[] = [
    { name: 'Printer A', pagePerMinute: 20, imgUrl: 'https://example.com/printerA.jpg', cost: 5000 },
    { name: 'Printer B', pagePerMinute: 25, imgUrl: 'https://example.com/printerB.jpg', cost: 6000 },
    { name: 'Printer C', pagePerMinute: 30, imgUrl: 'https://example.com/printerC.jpg', cost: 7000 },
    { name: 'Printer D', pagePerMinute: 35, imgUrl: 'https://example.com/printerD.jpg', cost: 8000 }
];
const openModalCreate = document.getElementById("open-modal-create-button")
const submitCreateFrom = document.getElementById("submit-create-form")
const mainPageShow = document.getElementById('main-page');
openModalCreate?.addEventListener('click', () => {
    console.log('click')
    openModal('create-modal');
});

function openModal(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.remove('hidden');
    }
}
function closeModal(id: string) {
    const elementHide = document.getElementById(id);
    if (elementHide) {
        elementHide.classList.add('hidden');
    }
}
submitCreateFrom?.addEventListener('click',(event) => {
    const form = document.getElementById('printerCreateForm') as HTMLFormElement;
     event.preventDefault();
     const formData:FormData = new FormData(form);
        // Access form data by field names
        const title = formData.get('Title') as string;
        const pps = parseFloat(formData.get('PPS') as string);
        const cost = parseFloat(formData.get('Cost') as string) ;
        const imageUrl = formData.get('imageUrl') as string;
        console.log(printers);
        let p:PrinterModel = {name: title, pagePerMinute: pps, imgUrl: imageUrl, cost: cost}
        printers.push(p);
        form.reset();
        closeModal('create-modal');
        drawList(printers);
    }
);
const drawList = (list: Array<PrinterModel>) => {
    const mainPageShow = document.getElementById("main-page");
    if (!mainPageShow) {
        return;
    }
    mainPageShow.innerHTML = '';
    const rowDiv = document.createElement('div');
    rowDiv.className = "flex flex-wrap justify-start gap-6";
    list.forEach((el, idx) => {
        const card = document.createElement('div');
        card.className = "printer-card bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 lg:w-1/4";

        card.innerHTML = `
            <div class="printer-image">
                <img src="${el.imgUrl}" alt="Printer Image" class="w-full h-48 object-cover">
            </div>
            <div class="printer-info p-4">
                <h4 class="text-xl font-semibold">${el.name}</h4>
                <p class="text-gray-600">Speed: ${el.pagePerMinute} pages per minute</p>
                <p class="text-gray-600">Price: ₴${el.cost}</p>
            </div>
            <div class="printer-actions flex justify-between p-4">
                <button class="edit-btn bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600" onclick="openModal('edit-printer')">Edit</button>
                <button class="remove-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onclick="removePrinter(${idx})">Remove</button>
            </div>
        `;

        rowDiv.appendChild(card);
    });

    mainPageShow.appendChild(rowDiv);
};

drawList(printers);
