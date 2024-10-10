using AutoMapper;
using PrinterService.Models;
using PrinterService.Models.Dto;
using System.Diagnostics;

namespace PrinterService
{

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Printer, PrinterDto>();

            CreateMap<PrinterDto, Printer>();
        }
    }
}
