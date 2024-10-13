import PrinterRequest from "./interfaces/PrinterRequest"
import {GetPrintersList} from "./requests/GetPrintersList";
import {GetPrinter} from "./requests/GetPrinter";
import {EditPrinter} from "./requests/EditPrinter";
import {RemovePrinter} from "./requests/RemovePrinter";
import {AddPrinter} from "./requests/AddPrinter";
// Створити клас “Принтер”
// котрий містить поля:
// - назва
// - швидкодія друку (в сторінках за хвилину)
// - ціна (в грвнях)


const openModalCreate = document.getElementById("open-modal-create-button") as HTMLFormElement;
const submitCreateFrom = document.getElementById("submit-create-form") as HTMLFormElement;
const closeModalButton = document.getElementById('cross-create-button') as HTMLFormElement;
const searchInput = document.getElementById('search-input') as HTMLFormElement;
const searchButton = document.getElementById('search-button') as HTMLFormElement;
const isSortByPPS = document.getElementById('sort-by-pps') as HTMLFormElement;
const totalPtinters = document.getElementById('total-printers') as HTMLFormElement;
const crossEditButton = document.getElementById('cross-edit-button') as HTMLFormElement;
const openExeptionModalElement = document.getElementById('exceptionModal') as HTMLFormElement;
const closeExeptionModalElement =  document.getElementById('exceptionModalClose') as HTMLFormElement;
const exceptionMessage = document.getElementById('exceptionMessage') as HTMLFormElement;

isSortByPPS?.addEventListener('click', async () => {
    if (isSortByPPS.checked) {
        await drawList();
    }
    else {
         await drawList();
    }
});

const openExeptionModal = (message:string) => {
    exceptionMessage.textContent = message;
    openModal('exceptionModal')
    openExeptionModalElement.classList.remove('hidden');
};
closeExeptionModalElement?.addEventListener('click', () => {
   closeModal('exceptionModal');
});
openModalCreate?.addEventListener('click', () => {
    openModal('create-modal');
});
closeModalButton?.addEventListener('click', () => {
    closeModal('create-modal');
});
crossEditButton?.addEventListener('click', () => {
    closeModal('edit-modal');
});
searchButton?.addEventListener('click', async() => {
    const searchValue:string = searchInput.value as string;
    await drawList();
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
submitCreateFrom?.addEventListener('click',async (event) => {
    const form = document.getElementById('printerCreateForm') as HTMLFormElement;
      event.preventDefault();
     const formData:FormData = new FormData(form);
        const name = formData.get('Name') as string;
        const pps = parseFloat(formData.get('PPS') as string);
        const cost = parseFloat(formData.get('Price') as string) ;
        const imageUrl = formData.get('imageUrl') as string;
        let addModel:PrinterRequest = {name: name, pps: pps, imageUrl: imageUrl, price: cost}
        let isValid:boolean = validateInput(addModel);
        if (!isValid) {
            return;
        }
        await AddPrinter(formData);
        form.reset();
        closeModal('create-modal');
       await drawList();
    }
);

const validateInput = (printer: PrinterRequest): boolean => {
    if (!printer.name) {
        openExeptionModal("Name is required");
        return false;
    }
    if (!printer.pps || printer.pps <= 0) {
        openExeptionModal("Page per minute (PSC) is required and must be greater than 0");
        return false;
    }
    if (!printer.price || printer.price <= 0) {
        openExeptionModal("Cost is required and must be greater than 0");
        return false;
    }
    if (!printer.imageUrl) {
        openExeptionModal("Image URL is required");
        return false;
    }
    const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
    if (!imageReg.test(printer.imageUrl)) {
        openExeptionModal("Invalid image URL format. Accepted formats: gif, jpg, jpeg, tiff, png");
        return false;
    }
    return true;
};
const removePrinter = async (index: string) => {
    console.log("remove", index);
    await RemovePrinter(index);
    await drawList();
}

const editPrinter =async (index: string) => {
    openModal('edit-modal');
    const submitEditForm = document.getElementById("submit-edit-form") as HTMLFormElement;
    const printer = await GetPrinter(index);
     const form = document.getElementById('printerEditForm') as HTMLFormElement;
    form['Name'].value = printer.name;
    form['PPS'].value = printer.pps;
    form['Price'].value = printer.price;
    form['imageUrl'].value = printer.imageUrl;
    submitEditForm?.addEventListener('click', async (event) => {
        const form = document.getElementById('printerEditForm') as HTMLFormElement;
        event.preventDefault()
        const formData: FormData = new FormData(form);
        const updatedName = formData.get('Name') as string;
        const updatedPPS = parseFloat(formData.get('PPS') as string);
        const updatedCost = parseFloat(formData.get('Price') as string);
        const updatedImageUrl = formData.get('imageUrl') as string;
        let isValid:boolean = validateInput({ name: updatedName, pps: updatedPPS, price: updatedCost, imageUrl: updatedImageUrl });
        if (!isValid) {
            return;
        }
        await EditPrinter(index,formData);
        closeModal('edit-modal');
        await drawList();
    });
};

const drawList = async () => {
    const  printerList = await GetPrintersList();

    console.log(printerList);
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
                <img src="${el.imageUrl}" alt="Printer Image" class="w-full h-48 object-cover">
            </div>
            <div class="printer-info p-4">
                <h4 class="text-xl font-semibold">${el.name}</h4>
                <p class="text-gray-600">Speed: ${el.pps} pages per minute</p>
                <p class="text-gray-600">Price: ${el.price} ₴</p>
            </div>
        `;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = "printer-actions flex justify-between p-4";

        const removeButton = document.createElement('button');
        removeButton.className = "remove-btn bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600";
        removeButton.addEventListener('click', () => removePrinter(el.id));

        const editButton = document.createElement('edit-button');
        editButton.className = "edit-btn bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600";
        editButton.addEventListener('click', async () => await editPrinter(el.id));

        actionsDiv.appendChild(removeButton);
        actionsDiv.appendChild(editButton);

        card.appendChild(actionsDiv);
        rowDiv.appendChild(card);
    });

    mainPageShow.appendChild(rowDiv);
};

await drawList();

