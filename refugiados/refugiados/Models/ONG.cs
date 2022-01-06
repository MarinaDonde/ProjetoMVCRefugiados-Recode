using System.ComponentModel.DataAnnotations;

namespace refugiados.Models
{
    public class ONG
    {
        [Key]
        public int IdONG { get; set; }

        public string Nome { get; set; }
        [StringLength(300)]
        public string Resumo { get; set; }

        public string Servico1 { get; set; }

        public string Servico2 { get; set; }

        public string Servico3 { get; set; }

        public string Servico4 { get; set; }

        public string URL { get; set; }


    }
}
