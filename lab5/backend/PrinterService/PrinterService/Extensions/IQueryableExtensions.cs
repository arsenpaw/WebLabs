using PrinterService.Models;

namespace PrinterService.Extensions;

public static class IQueryableExtensions
{
    public static IQueryable<Printer> ApplyOrdering(this IQueryable<Printer> query, PrinterFilter filter)
    {
        if (filter == null)
            return query;

        query = filter.PpsOrderBy switch
        {
            OrderByType.Descending => query.OrderByDescending(x => x.PPS),
            OrderByType.Ascending => query.OrderBy(x => x.PPS),
            _ => query
        };

        query = filter.MoneyFilter switch
        {
            MoneyFilter.UpToHundreds => query.Where(x => x.Price <= 100),
            MoneyFilter.HundredsAndMore => query.Where(x => x.Price > 100),
            _ => query
        };

        return query;
    }

    public static IQueryable<Printer> ApplySearching(this IQueryable<Printer> query, string search)
    {
        if (string.IsNullOrEmpty(search))
            return query;
        return query.Where(x => x.Name.Contains(search));
    }
}