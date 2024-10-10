using PrinterService.Models;
using PrinterService.Models.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PrinterService.Interfaces
{
    public interface IPrinterService
    {
        Task<IEnumerable<PrinterDto>> GetAllPrintersAsync();
        Task<PrinterDto> GetPrinterByIdAsync(Guid id);
        Task AddPrinterAsync(PrinterDto printerDto);
        Task<PrinterDto> UpdatePrinterAsync(PrinterDto printerDto);
        Task DeletePrinterAsync(Guid id);
    }
}
