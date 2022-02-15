#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ProjetoPana.Data;
using ProjetoPana.Models;

namespace ProjetoPana.Controllers
{
    public class ONGsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ONGsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: ONGs
        public async Task<IActionResult> Index()
        {
            return View(await _context.ONGs.ToListAsync());
        }

        // GET: ONGs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var oNG = await _context.ONGs
                .FirstOrDefaultAsync(m => m.IdONG == id);
            if (oNG == null)
            {
                return NotFound();
            }

            return View(oNG);
        }

        // GET: ONGs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: ONGs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("IdONG,Nome,Resumo,Servico1,Servico2,Servico3,Servico4,URL")] ONG oNG)
        {
        
            {
                _context.Add(oNG);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
      
        }

        // GET: ONGs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var oNG = await _context.ONGs.FindAsync(id);
            if (oNG == null)
            {
                return NotFound();
            }
            return View(oNG);
        }

        // POST: ONGs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("IdONG,Nome,Resumo,Servico1,Servico2,Servico3,Servico4,URL")] ONG oNG)
        {
            if (id != oNG.IdONG)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(oNG);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ONGExists(oNG.IdONG))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(oNG);
        }

        // GET: ONGs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var oNG = await _context.ONGs
                .FirstOrDefaultAsync(m => m.IdONG == id);
            if (oNG == null)
            {
                return NotFound();
            }

            return View(oNG);
        }

        // POST: ONGs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var oNG = await _context.ONGs.FindAsync(id);
            _context.ONGs.Remove(oNG);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ONGExists(int id)
        {
            return _context.ONGs.Any(e => e.IdONG == id);
        }
    }
}
