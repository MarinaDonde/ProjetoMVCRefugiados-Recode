using Microsoft.AspNetCore.Mvc;
using refugiados.Models;
using System.Diagnostics;

namespace refugiados.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ajuda()
        {
            return View();
        }

        public IActionResult login()
        {
            return View();
        }

        public IActionResult cultura()
        {
            return View();
        }

        public IActionResult adm()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}