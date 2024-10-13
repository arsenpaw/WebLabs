using PrinterService.Models;

namespace PrinterService.Extensions
{
    public static class IQueryableExtensions
    {

        public static IQueryable<Printer> ApplyOrdering(this IQueryable<Printer> query, PrinterFilter filter)
        {
            if (filter is null)
            {
                return query;
            }
            if (filter.PpsOrderBy == OrderByType.Descending)
            {
                return query.OrderByDescending(x => x.PPS);
            }
            else if (filter.PpsOrderBy == OrderByType.Ascending)
            {
                return query.OrderBy(x => x.PPS);
            }
            return query;
        }

        public static IQueryable<Printer> ApplySearching(this IQueryable<Printer> query, string search)
        {
            if (string.IsNullOrEmpty(search))
            {
                return query;
            }
            else
            {
                return query.Where(x => x.Name.Contains(search));
            }
        }
    }
}
