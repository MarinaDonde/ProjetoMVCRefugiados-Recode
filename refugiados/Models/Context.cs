using Microsoft.EntityFrameworkCore;
using refugiados.Models;

namespace refugiados.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Contato> Contatos { get; set; }
        public DbSet<ONG> ONGs { get; set; }
        public DbSet<Login> Logins { get; set; }



    }

}
