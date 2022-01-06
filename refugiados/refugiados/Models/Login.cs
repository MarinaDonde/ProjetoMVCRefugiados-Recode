using System.ComponentModel.DataAnnotations;

namespace refugiados.Models
{
    public class Login
    {
        [Key]
        public int IdLogin { get; set; }

        public string Usuario { get; set; }
        
        public string Senha { get; set; }
    }
}
