using Microsoft.EntityFrameworkCore;
using PrinterService.Models;
using System.Reflection;

namespace PrinterService.Contexts
{
    public class MyDBContext: DbContext
    {
        public DbSet<Printer> Printers { get; set; }
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {
       
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
    
}
