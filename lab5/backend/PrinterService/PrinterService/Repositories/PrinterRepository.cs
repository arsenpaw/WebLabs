using Microsoft.EntityFrameworkCore;
using PrinterService.Contexts;
using PrinterService.Interfaces;
using PrinterService.Models;

namespace PrinterService.Repositories
{
 

    public class PrinterRepository : IPrinterRepository
    {
        private readonly MyDBContext _context;

        public PrinterRepository(MyDBContext context)
        {
            _context = context;
        }

        public IQueryable<Printer> GetAll() => _context.Printers;

        public IQueryable<Printer> GetConcrete(Guid id)
        {
            return GetAll().Where(x => x.Id == id);
        }
        public async Task<Printer> AddPrinter(Printer printer)
        {
            await _context.Printers.AddAsync(printer);
            return printer;
        }
        public Printer UpdatePrinter(Printer printer)
        {
            _context.Printers.Update(printer);
            return printer;
        }
        public async Task Delete(Guid id)
        {
            var printer = await GetConcrete(id).FirstOrDefaultAsync();
            if (printer != null)
            {
                _context.Printers.Remove(printer);
            }
        }
        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
