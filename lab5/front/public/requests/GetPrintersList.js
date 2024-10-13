export const GetPrintersList = async () => {
    console.log('http://localhost:5097/Printers');
    const response = await fetch(process.env.BACKEND_URL + '/api/Printers');
    if (!response.ok) {
        throw new Error('Failed to fetch printers');
    }
    return await response.json();
};
