import PrinterModel from "./interfaces/PrinterModel"
// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)

const printers: PrinterModel[] = [
    { name: 'Printer C', pagePerMinute: 30, imgUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTHt5Y0gsuU8cs8R8T8zVwi1CCbD1hvMihoA9fFK97ey2pMJg4jW2Ol1UNkg2L6UXA53pg67JVdf8gf7kwkOXeFgD9iiRsNjWfqiHaV9WALNyaULR7NNoD', cost: 7000 },
    { name: 'Printer A', pagePerMinute: 20, imgUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS7ehAyjqHcCcKUKiMOdKybNUBfkHFK4Pcwj90h--zrLlNZxcaZ_oua2r-1sho-nZCKp1PWrWCCrr7jxvVxVqUNYbiPvfu10DdDAUQlZZc9Z64Fh-jJ63D3', cost: 5000 },
    { name: 'Printer B', pagePerMinute: 25, imgUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAYYxb0tE58vPtTncwZcuyl6o_7XopS9Blgw5TxsFGn3OuOHkjtM5I83hIG3LZliyJOu_bUlRq5P29nkawrKicTuDzICc8xGet8zuEgPbBeZO20SY55guQJ_ry', cost: 6000 },
    { name: 'Printer D', pagePerMinute: 35, imgUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzct2CL5PJ0qyfRxnau6Tm4XFCvp1y0QJtUakbXiSkoGkkIpT4uGtdLVhw8Uia9NE9fWXFvBuV8fUGa13ojvUGvCXnCMtHajqwhkrtNUBa4ldj2bupSh5K', cost: 8000 }
];

const openModalCreate = document.getElementById("open-modal-create-button") as HTMLFormElement;
const submitCreateFrom = document.getElementById("submit-create-form") as HTMLFormElement;
const closeModalButton = document.getElementById('cross-create-button') as HTMLFormElement;
const searchInput = document.getElementById('search-input') as HTMLFormElement;
const searchButton = document.getElementById('search-button') as HTMLFormElement;
const isSortByPPS = document.getElementById('sort-by-pps') as HTMLFormElement;
const totalPtinters = document.getElementById('total-printers') as HTMLFormElement;
const crossEditButton = document.getElementById('cross-edit-button') as HTMLFormElement;
isSortByPPS?.addEventListener('click', () => {
    if (isSortByPPS.checked) {
        let sortedPrinters = printers.slice(0).sort((a, b) =>  b.pagePerMinute - a.pagePerMinute );
        drawList(sortedPrinters);
    }
    else {
        drawList(printers);
    }
});
openModalCreate?.addEventListener('click', () => {
    openModal('create-modal');
});
closeModalButton?.addEventListener('click', () => {
    closeModal('create-modal');
});
crossEditButton?.addEventListener('click', () => {
    console.log('close ')
    closeModal('edit-modal');
});
searchButton?.addEventListener('click', () => {
    const searchValue:string = searchInput.value as string;
       console.log(searchValue)
    const filteredPrinters = printers.filter((printer) => printer.name.toLowerCase()
                                                                            .includes(searchValue.toLowerCase()));
    drawList(filteredPrinters);
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


const removePrinter = (index: number) => {
    console.log("remove", index);
    printers.splice(index, 1);
    drawList(printers);
}

const editPrinter = (index: number) => {
    const printer = printers[index];

    const form = document.getElementById('printerEditForm') as HTMLFormElement;
    form['Title'].value = printer.name;
    form['PPS'].value = printer.pagePerMinute;
    form['Cost'].value = printer.cost;
    form['imageUrl'].value = printer.imgUrl;

    openModal('edit-modal');

    const submitEditForm = document.getElementById("submit-edit-form") as HTMLFormElement;
    submitEditForm?.addEventListener('click', (event) => {
        event.preventDefault();
        const formData: FormData = new FormData(form);
        const updatedName = formData.get('Title') as string;
        const updatedPPS = parseFloat(formData.get('PPS') as string);
        const updatedCost = parseFloat(formData.get('Cost') as string);
        const updatedImageUrl = formData.get('imageUrl') as string;

        printers[index] = {
            name: updatedName,
            pagePerMinute: updatedPPS,
            cost: updatedCost,
            imgUrl: updatedImageUrl,
        };

        closeModal('edit-modal');
        drawList(printers);
    });
};

const drawList = (printerList: Array<PrinterModel>) => {
    totalPtinters.textContent = printerList.length.toString();
    const mainPageShow = document.getElementById("main-page");
    if (!mainPageShow) {
        return;
    }
    mainPageShow.innerHTML = '';
    const rowDiv = document.createElement('div');
    rowDiv.className = "flex flex-wrap justify-start gap-6";

    printerList.forEach((el, idx) => {
        const card = document.createElement('div');
        card.className = "printer-card bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 lg:w-1/4";

        card.innerHTML = `
            <div class="printer-image">
                <img src="${el.imgUrl}" alt="Printer Image" class="w-full h-48 object-cover">
            </div>
            <div class="printer-info p-4">
                <h4 class="text-xl font-semibold">${el.name}</h4>
                <p class="text-gray-600">Speed: ${el.pagePerMinute} pages per minute</p>
                <p class="text-gray-600">Price: ${el.cost} ₴</p>
            </div>
        `;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = "printer-actions flex justify-between p-4";

        const removeButton = document.createElement('button');
        removeButton.className = "remove-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600";
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removePrinter(idx));

        const editButton = document.createElement('edit-button');
        editButton.className = "edit-btn bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600";
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editPrinter(idx));

        actionsDiv.appendChild(removeButton);
        actionsDiv.appendChild(editButton);

        card.appendChild(actionsDiv);
        rowDiv.appendChild(card);
    });

    mainPageShow.appendChild(rowDiv);
};


drawList(printers);
