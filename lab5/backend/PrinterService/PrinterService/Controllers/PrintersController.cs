using Microsoft.AspNetCore.Mvc;
using PrinterService.Extensions;
using PrinterService.Interfaces;
using PrinterService.Models.Dto;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PrinterService.Models;

namespace PrinterService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PrintersController : ControllerBase
    {
        private readonly IPrinterService _printerService;
        private readonly ILogger<PrintersController> _logger;

        public PrintersController(ILogger<PrintersController> logger, IPrinterService printerService)
        {
            _logger = logger;
            _printerService = printerService;
        }

        [HttpGet]
        public async Task<IEnumerable<PrinterDto>> Get([FromQuery] PrinterFilter? printerFilter, string? searchWord)
        {
            return await _printerService.GetAllPrintersAsync(printerFilter, searchWord);
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult<PrinterDto>> GetConcrete([FromRoute] Guid id)
        {
            var printer = await _printerService.GetPrinterByIdAsync(id);
            if (printer == null)
            {
                return NotFound();
            }
            return Ok(printer);
        }

        [HttpPost]
        public async Task<ActionResult> PostConcrete([FromForm] PrinterDto printer)
        {
            await _printerService.AddPrinterAsync(printer);
            return Ok();
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<PrinterDto>> PutConcrete(Guid id, [FromForm]PrinterDto printer)
        {
          
            var updatedPrinter = await _printerService.UpdatePrinterAsync(id,printer);
            if (updatedPrinter == null)
            {
                return NotFound();
            }
            return Ok(updatedPrinter);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteConcrete([FromRoute] Guid id)
        {
            await _printerService.DeletePrinterAsync(id);
            return Ok();
        }
    }
}
