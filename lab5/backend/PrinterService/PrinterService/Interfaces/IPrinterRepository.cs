using PrinterService.Models;

namespace PrinterService.Interfaces
{
    public interface IPrinterRepository
    {
        Task<Printer> AddPrinter(Printer printer);
        Task Delete(Guid id);
        IQueryable<Printer> GetAll();
        IQueryable<Printer> GetConcrete(Guid id);
        Printer UpdatePrinter(Printer printer);
        Task SaveChangesAsync();
    }
}