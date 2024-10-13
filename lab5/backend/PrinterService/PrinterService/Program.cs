using Microsoft.EntityFrameworkCore;
using PrinterService;
using PrinterService.Contexts;
using PrinterService.Interfaces;
using PrinterService.Repositories;
using PrinterService.Services;
using Serilog;

var builder = WebApplication.CreateBuilder(args);
var configurationFile = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .Build();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<IPrinterService, CrudPrinterService>();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MyDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IPrinterRepository, PrinterRepository>();
builder.Host.UseSerilog((context, config) =>
{
    config
        .ReadFrom.Configuration(configurationFile);
});
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builderPol =>
    {
        builderPol.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});
var app = builder.Build();

app.UseCors("AllowAll");
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();