namespace PrinterService.Models;

public class PrinterFilter
{
    public OrderByType PpsOrderBy { get; set; }

    public MoneyFilter MoneyFilter { get; set; }
}