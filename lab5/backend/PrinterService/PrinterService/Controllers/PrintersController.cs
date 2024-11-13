using Microsoft.AspNetCore.Mvc;
using PrinterService.Interfaces;
using PrinterService.Models;
using PrinterService.Models.Dto;

namespace PrinterService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PrintersController : ControllerBase
{
    private readonly ILogger<PrintersController> _logger;
    private readonly IPrinterService _printerService;

    public PrintersController(ILogger<PrintersController> logger, IPrinterService printerService)
    {
        _logger = logger;
        _printerService = printerService;
    }

    [HttpGet]
    public async Task<IEnumerable<PrinterDto>> Get([FromQuery] PrinterFilter? printerFilter, string? search)
    {
        return await _printerService.GetAllPrintersAsync(printerFilter, search);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<PrinterDto>> GetConcrete([FromRoute] Guid id)
    {
        var printer = await _printerService.GetPrinterByIdAsync(id);
        if (printer == null) return NotFound();
        return Ok(printer);
    }

    [HttpPost]
    public async Task<ActionResult> PostConcrete([FromForm] PrinterDto printer)
    {
        await _printerService.AddPrinterAsync(printer);
        return Ok();
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<PrinterDto>> PutConcrete(Guid id, [FromForm] PrinterDto printer)
    {
        var updatedPrinter = await _printerService.UpdatePrinterAsync(id, printer);
        if (updatedPrinter == null) return NotFound();
        return Ok(updatedPrinter);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteConcrete([FromRoute] Guid id)
    {
        await _printerService.DeletePrinterAsync(id);
        return Ok();
    }
}