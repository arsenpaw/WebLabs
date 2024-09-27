import PrinterModel from "./models/PrinterModel";
// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)


let records: PrinterModel[] = [new PrinterModel('HP', 10,
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww8.hp.com%2Fua%2Fuk%2Fhome.html&psig=AOvVaw3Q6Z',4)]
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
 function OnSubmit(event: Event) {
     const form = document.getElementById('printerCreateForm') as HTMLFormElement;
    event.preventDefault();
     const formData:FormData = new FormData(form);
        // Access form data by field names
        const title = formData.get('Title') as string;
        const pps = parseFloat(formData.get('PPS') as string);
        const cost = parseFloat(formData.get('Cost') as string) ;
        const imageUrl = formData.get('imageUrl') as string;
        console.log(records);
        records.push(new PrinterModel(title, pps, imageUrl, cost));
        form.reset();
        closeModal('createPrinterModal');
        drawList(records);
}

const drawList = (list: Array<PrinterModel>) => {
    const mainPageShow = document.getElementById('main-page');
    if (!mainPageShow) {
        return;
    }
    mainPageShow.innerHTML = '';
    list.forEach((el, idx) => {
        mainPageShow.innerHTML += `
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 printer-cards">
            <div class="printer-card bg-white rounded-lg shadow-md overflow-hidden">
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
            </div>
        </section>
        `;
    });
};

