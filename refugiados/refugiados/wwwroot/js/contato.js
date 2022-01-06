    //Português
    $(function () {
        $(".br").click(function () {
            //Parágrafos
            $(".p43").text("Nome");
            $(".p44").text("País de origem");
            $(".p45").text("Cidade");
            $(".p46").text("Telefone");
            $(".p47").text("Deixe sua mensagem");
            //Input
            $(".i1").text("Insira o seu nome");
            $(".i2").text("Insira o seu país de origem");
            $(".i3").text("Insira a cidade em que você se encontra");
            $(".i4").text("usuario@exemplo.com");
            $(".i5").text("Insira o seu telefone");
            //Traduzindo
            $(".idiomas").removeClass("change-en");
            $(".idiomas").removeClass("change-es");
            $(".idiomas").addClass("change-br");
        });
    });

    //English
    $(function () {
        $(".en").click(function () {
            //Paragraphs
            $(".p43").text("Name");
            $(".p44").text("Country of origin");
            $(".p45").text("City");
            $(".p46").text("Phone Number");
            $(".p47").text("Leave your message");
            //Translating
            $(".idiomas").removeClass("change-br");
            $(".idiomas").removeClass("change-es");
            $(".idiomas").addClass("change-en");
        });
    });

    //Espanol
    $(function () {
        $(".es").click(function () {
            //Párrafos
            $(".p43").text("Nombre");
            $(".p44").text("País de origen");
            $(".p45").text("Ciudad");
            $(".p46").text("Teléfono");
            $(".p47").text("Deja tu mensaje");
            //Traductorio
            $(".idiomas").removeClass("change-br");
            $(".idiomas").removeClass("change-en");
            $(".idiomas").addClass("change-es");
        });
    });

