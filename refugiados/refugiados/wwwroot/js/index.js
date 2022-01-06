

const br = document.querySelector('.br');
const en = document.querySelector('.en');
const es = document.querySelector('.es');
let portugues, espanol, english = false;



br.addEventListener("click", function () {
    portugues = true;
});

en.addEventListener("click", function () {
    english = true;
});

es.addEventListener("click", function () {
    espanol = true;
});

alert(english)

if (portugues == true) {
//Português
    //$(function () {
      //  $(".br").click(function () {
            //Títulos
            $(".h1a").text("Refugiados no Brasil");
            $(".h2a").text("Legislação Brasileira");
            $(".h2b").text("Direitos dos Refugiados");
            //Parágrafos
            $("#p1").text("Refugiados recém-chegados no Brasil enfrentam problemas relacionados à saúde, alimentação, moradia, documentação, educação, trabalho digno e igualdade.");
            $("#p2").text("A maioria dos refugiados chegam ao Brasil sem documentos. Eles encontram dificuldades em trocar a moeda nativa para o Real Brasileiro, e sem dinheiro, dependem de ajuda para conseguir moradia e alimentação digna. Os documentos são necessários para ter acesso à educação, saúde e trabalho. O idioma também é uma grande barreira para o refugiado que chega ao Brasil sem conhecimento da língua portuguesa. Como vimos acima, os problemas afetam o refugiado em muitos aspectos de sua vida, e por isso desejamos contribuir, informando a melhor maneira de ter acesso a diferentes serviços em um idioma que o refugiado possa entender.");
            $("#p3").text("A lei brasileira de refúgio nº  9474/1997 define como pessoa refugiada aquela que:");
            $("#p4").text("I – devido a fundados temores de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões políticas encontre - se fora de seu país de nacionalidade e não possa ou não queira acolher - se à proteção de tal país;");
            $("#p5").text("II – não tendo nacionalidade e estando fora do país onde antes teve sua residência habitual, não possa ou não queira regressar a ele, em função das circunstâncias anteriores;");
            $("#p6").text("III – devido a grave e generalizada violação de direitos humanos, é obrigado a deixar seu país de nacionalidade para buscar refúgio em outro país.");
            $("#p7").text("Um refugiado tem direito a buscar e receber refúgio em um lugar seguro. Contudo, a proteção internacional abrange mais do que a segurança física.Os refugiados devem usufruir, pelo menos, dos mesmos direitos e da mesma assistência básica que qualquer outro estrangeiro residindo legalmente no país, incluindo liberdade de expressão e de movimento, e proteção contra tortura e tratamento degrante.");
            $("#p8").text("De igual modo, os direitos econômicos e sociais que se aplicam aos refugiados são os mesmos que se aplicam a outros indivíduos.Pessoas refugiadas devem ter acesso à assistência médica. Pessoas refugiadas adultas devem ter direito a trabalhar.Nenhuma criança refugiada deve ser privada de escolaridade.");
            $("#p9").text("Entretanto, quando não há recursos governamentais disponíveis para atender demandas imediatas, muitas ongs prestam assistência oferecendo abrigo, alimentação, auxílio na retirada de documentos, capacitação profissional e parceria com empresas para a empregabilidade dos refugiados.");
            $("#p10").text("O Brasil é um dos poucos países no mundo que estabelece quotas anuais de reassentamento, além de aceitar aqueles que chegam espontaneamente às suas fronteiras.A maioria dos países consideram pedidos de reassentamento caso a caso, normalmente com base na reunião familiar ou em fortes laços culturais.");
            $("#p11").text("Segundo dados divulgados pelo Comitê Nacional para os Refugiados (CONARE) na 6ª edição do relatório “Refúgio em Números”, ao final de 2020 havia 57.099 pessoas refugiadas reconhecidas pelo Brasil.");
            $("#p12").text("A nacionalidade com maior número de pessoas refugiadas reconhecidas, entre 2011 e 2020, é a venezuelana(46.412), seguida dos sírios(3.594) e congoleses(1.050).Dentre os solicitantes da condição de refugiado, as nacionalidades mais representativas foram de venezuelanos(60 %), haitianos(23 %) e cubanos(5 %).");

           // $(".idiomas").removeClass("change-en");
         //   $(".idiomas").removeClass("change-es");
       //     $(".idiomas").addClass("change-br");
   //     });
    //});
}

if (english == true) {
//English
    //$(function () {
      //  $(".en").click(function () {
            //Titles
            $(".h1a").text("Refugees in Brazil");
            $(".h2a").text("Brazilian legislation");
            $(".h2b").text("Refugee Rights");
            //Paragraphs
            $("#p1").text("Newly arrived refugees in Brazil face problems related to health, food, housing, documentation, education, decent work and equality.");
            $("#p2").text("Most refugees arrive in Brazil without documents. They find it difficult to exchange their native currency for the Brazilian Real, and without money, they depend on help to get decent housing and food. Documents are needed to access education, health and work. Language is also a major barrier for refugees who arrive in Brazil without knowledge of the Portuguese language. As we saw above, the problems affect the refugee in many aspects of his life, and that is why we want to contribute by informing the best way to access different services in a language that the refugee can understand.");
            $("#p3").text("Brazilian refugee law No. 9474/1997 defines a refugee as a person who:");
            $("#p4").text("I – due to well-founded fears of persecution for reasons of race, religion, nationality, social group or political opinions, find themselves outside their country of nationality and are unable or unwilling to accept the protection of that country;");
            $("#p5").text("II – having no nationality and being outside the country where he previously had his habitual residence, he cannot or does not want to return to it, due to previous circumstances;");
            $("#p6").text("III – due to a serious and widespread violation of human rights, he is obliged to leave his country of nationality to seek refuge in another country.");
            $("#p7").text("A refugee is entitled to seek and receive refuge in a safe place. However, international protection encompasses more than physical security. Refugees must enjoy at least the same rights and basic assistance as any other foreigner legally residing in the country, including freedom of expression and movement, and protection from torture and degrading treatment.");
            $("#p8").text("Likewise, the economic and social rights that apply to refugees are the same as those that apply to other individuals. Refugees must have access to medical care. Adult refugees must have the right to work. No refugee child should be deprived of schooling.");
            $("#p9").text("However, when there are no government resources available to meet immediate demands, many NGOs provide assistance by offering shelter, food, assistance in the removal of documents, professional training and partnerships with companies for the employability of refugees.");
            $("#p10").text("Brazil is one of the few countries in the world that establishes annual resettlement quotas, in addition to accepting those who spontaneously arrive at its borders. Most countries consider resettlement requests on a case-by-case basis, usually based on family reunion or strong cultural ties.");
            $("#p11").text("According to data released by the National Committee for Refugees (CONARE) in the 6th edition of the report “Refúgio em Números”, at the end of 2020 there were 57,099 recognized refugees in Brazil.");
            $("#p12").text("The nationality with the highest number of recognized refugees, between 2011 and 2020, is Venezuelan (46,412), followed by Syrians (3,594) and Congolese (1,050). Among applicants for refugee status, the most representative nationalities were Venezuelans (60%), Haitians (23%) and Cubans (5%).");
            //Translating
          //  $(".idiomas").removeClass("change-br");
        //    $(".idiomas").removeClass("change-es");
      //      $(".idiomas").addClass("change-en");
      //  });
    //});
}
/*
    //Espanol
    $(function () {
        $(".es").click(function () {
            //Títulos
            $(".h1a").text("Refugiados en Brasil");
            $(".h2a").text("Legislación Brasileña");
            $(".h2b").text("Derechos de los refugiados");
            //Parágrafos
            $("#p1").text("Los refugiados recién llegados a Brasil enfrentan problemas relacionados con la salud, la alimentación, la vivienda, la documentación, la educación, el trabajo decente y la igualdad.");
            $("#p2").text("La mayoría de los refugiados llegan a Brasil sin documentos. Les resulta difícil cambiar su moneda nativa por el real brasileño y, sin dinero, dependen de la ayuda para conseguir una vivienda y comida dignas. Los documentos son necesarios para acceder a la educación, la salud y el trabajo. El idioma también es una barrera importante para los refugiados que llegan a Brasil sin conocimiento del idioma portugués. Como vimos anteriormente, los problemas afectan al refugiado en muchos aspectos de su vida, y por eso queremos contribuir informando de la mejor manera para acceder a los diferentes servicios en un idioma que el refugiado pueda entender.");
            $("#p3").text("La ley brasileña de refugiados núm. 9474/1997 define a un refugiado como una persona que:");
            $("#p4").text("I - debido a temores fundados de persecución por motivos de raza, religión, nacionalidad, grupo social u opiniones políticas, se encuentran fuera de su país de nacionalidad y no pueden o no quieren aceptar la protección de dicho país;");
            $("#p5").text("II - no tener nacionalidad y estar fuera del país donde anteriormente tenía su residencia habitual, no puede o no quiere regresar a él, por circunstancias anteriores;");
            $("#p6").text("III - debido a una grave y generalizada violación de los derechos humanos, se ve obligado a salir de su país de nacionalidad para buscar refugio en otro país.");
            $("#p7").text("Un refugiado tiene derecho a buscar y recibir refugio en un lugar seguro. Sin embargo, la protección internacional abarca más que la seguridad física. Los refugiados deben disfrutar al menos de los mismos derechos y asistencia básica que cualquier otro extranjero que resida legalmente en el país, incluida la libertad de expresión y movimiento, y protección contra la tortura y los tratos degradantes.");
            $("#p8").text("Asimismo, los derechos económicos y sociales que se aplican a los refugiados son los mismos que se aplican a otras personas. Los refugiados deben tener acceso a la atención médica. Las personas adultas refugiadas deben tener derecho a trabajar. Ningún niño refugiado debe ser privado de la educación.");
            $("#p9").text("Sin embargo, cuando no hay recursos gubernamentales disponibles para satisfacer las demandas inmediatas, muchas ONG brindan asistencia ofreciendo refugio, alimentos, asistencia en la remoción de documentos, capacitación profesional y asociaciones con empresas para la empleabilidad de los refugiados.");
            $("#p10").text("Brasil es uno de los pocos países del mundo que establece cuotas anuales de reasentamiento, además de aceptar a quienes llegan espontáneamente a sus fronteras. La mayoría de los países consideran las solicitudes de reasentamiento caso por caso, generalmente basadas en la reunificación familiar o una fuerte cultura corbatas.");
            $("#p11").text("Según datos publicados por el Comité Nacional de Refugiados (CONARE) en la 6ª edición del informe “Refúgio em Números”, a fines de 2020 había 57.099 refugiados reconocidos en Brasil.");
            $("#p12").text("La nacionalidad con mayor número de refugiados reconocidos, entre 2011 y 2020, es la venezolana (46.412), seguida de la siria (3.594) y la congoleña (1.050). Entre los solicitantes de la condición de refugiado, las nacionalidades más representativas fueron las venezolanas (60%). , Haitianos (23%) y cubanos (5%).");
            //Traductorio
            $(".idiomas").removeClass("change-en");
            $(".idiomas").removeClass("change-br");
            $(".idiomas").addClass("change-es");
        });
    });
*/