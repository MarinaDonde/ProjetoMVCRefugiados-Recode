using Microsoft.AspNetCore.Mvc;
using ProjetoPana.Models;
using System.Diagnostics;

namespace ProjetoPana.Controllers
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

        public IActionResult index_en()
        {
            return View();
        }

        public IActionResult index_es()
        {
            return View();
        }

        public IActionResult index_fr()
        {
            return View();
        }

        public IActionResult ajuda_br()
        {
            return View();
        }

        public IActionResult ajuda_en()
        {
            return View();
        }

        public IActionResult ajuda_es()
        {
            return View();
        }

        public IActionResult ajuda_fr()
        {
            return View();
        }

        public IActionResult cultura_br()
        {
            return View();
        }

        public IActionResult cultura_en()
        {
            return View();
        }

        public IActionResult cultura_es()
        {
            return View();
        }

        public IActionResult cultura_fr()
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