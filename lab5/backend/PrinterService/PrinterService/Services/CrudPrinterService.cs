using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PrinterService.Extensions;
using PrinterService.Interfaces;
using PrinterService.Models;
using PrinterService.Models.Dto;

namespace PrinterService.Services;

public class CrudPrinterService : IPrinterService
{
    private readonly IMapper _mapper;
    private readonly IPrinterRepository _printerRepository;

    public CrudPrinterService(IPrinterRepository printerRepository, IMapper mapper)
    {
        _printerRepository = printerRepository;
        _mapper = mapper;
    }

    public async Task<PrinterDto> GetPrinterByIdAsync(Guid id)
    {
        var printer = await _printerRepository.GetConcrete(id).FirstOrDefaultAsync();
        return _mapper.Map<PrinterDto>(printer);
    }

    public async Task AddPrinterAsync(PrinterDto printerDto)
    {
        var printer = _mapper.Map<Printer>(printerDto);
        await _printerRepository.AddPrinter(printer);
        await _printerRepository.SaveChangesAsync();
    }

    public async Task<PrinterDto> UpdatePrinterAsync(Guid id, PrinterDto printerDto)
    {
        var isPrinterExist = await _printerRepository.GetConcrete(id).AnyAsync();
        if (!isPrinterExist) return null;
        var printerEntity = _mapper.Map<Printer>(printerDto);
        var updatedPrinter = await _printerRepository.UpdatePrinterAsync(id, printerEntity);
        await _printerRepository.SaveChangesAsync();
        return _mapper.Map<PrinterDto>(updatedPrinter);
    }

    public async Task DeletePrinterAsync(Guid id)
    {
        await _printerRepository.Delete(id);
        await _printerRepository.SaveChangesAsync();
    }

    public async Task<IEnumerable<PrinterDto>> GetAllPrintersAsync(PrinterFilter filters, string searchWord)
    {
        var printers = await _printerRepository.GetAll().ApplyOrdering(filters)
            .ApplySearching(searchWord).ToListAsync();
        return _mapper.Map<IEnumerable<PrinterDto>>(printers);
    }
}