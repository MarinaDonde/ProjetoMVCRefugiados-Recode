    //Português
    $(function () {
        $(".br").click(function () {
            //navbar
            $(".a1").text("Cultura Brasileira");
            $(".a2").text("Onde Encontrar Ajuda?");
            $(".a3").text("Entre em Contato");
            //Parágrafos
            $(".p43").text("Nome");
            $(".p44").text("País de origem");
            $(".p45").text("Cidade");
            $(".p46").text("Telefone");
            $(".p47").text("Deixe sua mensagem");
            //Input
            $(".btn1").text("Enviar");
            //Traduzindo
            $(".idiomas").removeClass("change-en");
            $(".idiomas").removeClass("change-es");
            $(".idiomas").addClass("change-br");
        });
    });

    //English
    $(function () {
        $(".en").click(function () {
            //navbar
            $(".a1").text("Brazilian Culture");
            $(".a2").text("Where to Find Help?");
            $(".a3").text("Contact");
            //Paragraphs
            $(".p43").text("Name");
            $(".p44").text("Country of origin");
            $(".p45").text("City");
            $(".p46").text("Phone Number");
            $(".p47").text("Leave your message");
            //Input
            $(".btn1").text("Submit");
            //Translating
            $(".idiomas").removeClass("change-br");
            $(".idiomas").removeClass("change-es");
            $(".idiomas").addClass("change-en");
        });
    });

    //Espanol
    $(function () {
        $(".es").click(function () {
            //navbar
            $(".a1").text("Cultura Brasileña");
            $(".a2").text("¿Dónde encontrar ayuda?");
            $(".a3").text("Entre en contacto");
            //Párrafos
            $(".p43").text("Nombre");
            $(".p44").text("País de origen");
            $(".p45").text("Ciudad");
            $(".p46").text("Teléfono");
            $(".p47").text("Deja tu mensaje");
            //Input
            $(".btn1").text("Mandar");
            //Traductorio
            $(".idiomas").removeClass("change-br");
            $(".idiomas").removeClass("change-en");
            $(".idiomas").addClass("change-es");
        });
    });

