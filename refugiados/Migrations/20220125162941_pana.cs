using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace refugiados.Migrations
{
    public partial class pana : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contatos",
                columns: table => new
                {
                    IdContato = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    Nacionalidade = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Cidade = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Mensagem = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contatos", x => x.IdContato);
                });

            migrationBuilder.CreateTable(
                name: "Logins",
                columns: table => new
                {
                    IdLogin = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Usuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logins", x => x.IdLogin);
                });

            migrationBuilder.CreateTable(
                name: "ONGs",
                columns: table => new
                {
                    IdONG = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Resumo = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: false),
                    Servico1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Servico2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Servico3 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Servico4 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    URL = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ONGs", x => x.IdONG);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contatos");

            migrationBuilder.DropTable(
                name: "Logins");

            migrationBuilder.DropTable(
                name: "ONGs");
        }
    }
}
