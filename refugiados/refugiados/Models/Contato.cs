using System.ComponentModel.DataAnnotations;

namespace refugiados.Models
{
    public class Contato
    {
        [Key]
        public int IdContato { get; set; }
        [Required]
        [StringLength(40)]
        public string Nome { get; set; }
        [StringLength(20)]
        public string Nacionalidade { get; set; }
        [StringLength(20)]
        public string Cidade { get; set; }
        [StringLength(30)]
        [Required]
        public string Email { get; set; }
        [StringLength(20)]
        public string Telefone { get; set; }
        [StringLength(200)]
        public string Mensagem { get; set; }
    }
}
