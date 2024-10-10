using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PrinterService.Interfaces;
using PrinterService.Models;
using PrinterService.Models.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PrinterService.Services
{
    public class CrudPrinterService : IPrinterService
    {
        private readonly IPrinterRepository _printerRepository;
        private readonly IMapper _mapper;

        public CrudPrinterService(IPrinterRepository printerRepository, IMapper mapper)
        {
            _printerRepository = printerRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<PrinterDto>> GetAllPrintersAsync()
        {
            var printers = await _printerRepository.GetAll().ToListAsync();
            return _mapper.Map<IEnumerable<PrinterDto>>(printers);
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

        public async Task<PrinterDto> UpdatePrinterAsync(PrinterDto printerDto)
        {
            var printerEntity = _mapper.Map<Printer>(printerDto);
            var updatedPrinter =  _printerRepository.UpdatePrinter(printerEntity);
            await _printerRepository.SaveChangesAsync();
            return _mapper.Map<PrinterDto>(updatedPrinter);
        }

        public async Task DeletePrinterAsync(Guid id)
        {
            await _printerRepository.Delete(id);
            await _printerRepository.SaveChangesAsync();
        }
    }
}
