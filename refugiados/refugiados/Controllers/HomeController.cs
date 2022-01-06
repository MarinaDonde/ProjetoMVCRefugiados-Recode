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

        public IActionResult en_index()
        {
            return View();
        }

        public IActionResult es_index()
        {
            return View();
        }

        public IActionResult br_ajuda()
        {
            return View();
        }

        public IActionResult en_ajuda()
        {
            return View();
        }

        public IActionResult es_ajuda()
        {
            return View();
        }
        public IActionResult login()
        {
            return View();
        }

        public IActionResult br_cultura()
        {
            return View();
        }

        public IActionResult en_cultura()
        {
            return View();
        }

        public IActionResult es_cultura()
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