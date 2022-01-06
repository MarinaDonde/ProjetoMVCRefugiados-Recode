    //Português
    $(function () {
        $(".br").click(function () {
            //navbar
            $(".a1").text("Cultura Brasileira");
            $(".a2").text("Onde Encontrar Ajuda?");
            $(".a3").text("Entre em Contato");
            //carrossel
            $("#h5a").text("Brasil: País de diversidade étnica");
            $("#h5b").text("Brasil: País de diversidade cultural");
            $("#h5c").text("Brasil: País de diversidade religiosa");
            //Paragrafo
            //$(".fonte").text("Fonte:");
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
            //carosel
            $("#h5a").text("Brazil: Country of Ethnic Diversity");
            $("#h5b").text("Brazil: Country of cultural diversity");
            $("#h5c").text("Brazil: Country of religious diversity");
            //Paragraphs
            //$(".fonte").text("Source:");
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
            //carrusel
            $("#h5a").text("Brasil: país de diversidad étnica");
            $("#h5b").text("Brasil: País de diversidad cultural");
            $("#h5c").text("Brasil: País de diversidad religiosa");
            //Párrafos
            //$(".fonte").text("Fuente:");
            //Traductorio
            $(".idiomas").removeClass("change-br");
            $(".idiomas").removeClass("change-es");
            $(".idiomas").addClass("change-es");
        });
    });

