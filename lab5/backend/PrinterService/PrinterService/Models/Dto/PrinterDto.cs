using System;
using System.ComponentModel.DataAnnotations;

namespace PrinterService.Models.Dto
{
    public class PrinterDto
    {
         public Guid? Id { get; set; }

        [Required(ErrorMessage = "The printer name is required.")]
        [StringLength(100, ErrorMessage = "The printer name cannot be longer than 100 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Price is required.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be a positive value.")]
        public double Price { get; set; }

        [Required(ErrorMessage = "PPS is required.")]
        [Range(0, float.MaxValue, ErrorMessage = "PPS must be a non-negative value.")]
        public float PPS { get; set; }

        [Url(ErrorMessage = "Please enter a valid URL.")]
        [Required(ErrorMessage = "The image URL is required.")]
        public string ImageUrl { get; set; }  
    }
}
