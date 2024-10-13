using PrinterService.Extensions;
using PrinterService.Models;
using PrinterService.Models.Dto;

namespace PrinterService.Interfaces;

public interface IPrinterService
{
    Task<IEnumerable<PrinterDto>> GetAllPrintersAsync(PrinterFilter filters, string searchWord);
    Task<PrinterDto> GetPrinterByIdAsync(Guid id);
    Task AddPrinterAsync(PrinterDto printerDto);
    Task<PrinterDto> UpdatePrinterAsync(Guid id, PrinterDto printerDto);
    Task DeletePrinterAsync(Guid id);
}