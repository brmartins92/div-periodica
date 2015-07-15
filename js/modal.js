$(document).ready(function(){
  //var pag = window.location.pathname;
  //pag = pag.split("/");
  //switch(pag[5]){
    //case 'index.html':
    modal();
    //break; 
  //}
});

function modal(){
  $('#btn_h').click(function(e) {
    e.preventDefault();
    $('#title_modal').text('Hidrogênio');
    $('#modal_num_atomico').val('1');
    $('#modal_img').html("<img src='imagens/hidrogenio.jpg' id='img_modal'>");
    $('#modal_origem').val('Natural');
    $('#modal_descoberto').val("Cavendish / 1766 - Robert Boyle / 1671 (Inglaterra)");
    $('#modal_origem_nome').val("Do grego Hydro, 'gerar água'");
    $('#modal_massa_atomica').val("1,00794(7)");
    $('#modal_volume_atomico').val("14,1 cm³/mol");
    $('#modal_densidade').val("0,0899 g/cm³");
    $('#modal_fusao').val("-259,14 °C");
    $('#modal_ebulicao').val("-252,87 °C");
    $('#modal_cntp').val("Gasoso");
    $('#modal_rede_critalografica').val("Hexagonal Compacta");
    $('#modal_raio_atomico').val("2,08 Åa");
    $('#modal_eletronegatividade').val("2,20");
    $('#modal_ionizacao').val("13,598 V");
    $('#modal_raio_covalente').val("0,32 Å");
    $('#modal_raio_ionico').val("2,08E-1 Å");
    $('#modal_camadas').val("1");
    $('#modal_condutividade_aletrica').val("-");
    $('#modal_configuracao_eletronica').val("1s1");
    $('#modal_orbital').val("1s1");
    abrir_modal();
  });
  
    $('#btn_li').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Lítio');
        $('#modal_num_atomico').val('3');
        $('#modal_img').html("<img src='imagens/litio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("August Arfvedson / 1818");
        $('#modal_origem_nome').val("Do grego Lithos, 'pedra'");
        $('#modal_massa_atomica').val("[6,941(2)]");
        $('#modal_volume_atomico').val("13,1 cm³/mol");
        $('#modal_densidade').val("0,53 g/cm³");
        $('#modal_fusao').val("180,54 °C");
        $('#modal_ebulicao').val("1347 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("1,55 Å");
        $('#modal_eletronegatividade').val("0,98");
        $('#modal_ionizacao').val("5,392 V");
        $('#modal_raio_covalente').val("1,23 Å");
        $('#modal_raio_ionico').val("0,60E+1 Å");
        $('#modal_camadas').val("2,1");
        $('#modal_condutividade_aletrica').val("11,7 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[He] 2s1");
        $('#modal_orbital').val("2s1");
        abrir_modal();
    });

    $('#btn_na').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Sódio');
        $('#modal_num_atomico').val('11');
        $('#modal_img').html("<img src='imagens/sodio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1807");
        $('#modal_origem_nome').val("Do grego Nítron, 'carbonato de soda'");
        $('#modal_massa_atomica').val("22,98976928(2)");
        $('#modal_volume_atomico').val("23,7 cm³/mol");
        $('#modal_densidade').val("0,97 g/cm³");
        $('#modal_fusao').val("97,8 °C");
        $('#modal_ebulicao').val("882,9 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("1,9 Å");
        $('#modal_eletronegatividade').val("0,93");
        $('#modal_ionizacao').val("5,139 V");
        $('#modal_raio_covalente').val("1,54 Å");
        $('#modal_raio_ionico').val("0,95E+1 Å");
        $('#modal_camadas').val("2,8,1");
        $('#modal_condutividade_aletrica').val("20,1 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ne] 3s1");
        $('#modal_orbital').val("3s1");
        abrir_modal();
    });
    $('#btn_k').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Potássio');
        $('#modal_num_atomico').val('19');
        $('#modal_img').html("<img src='imagens/potassio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1807");
        $('#modal_origem_nome').val("Do lat. científico potassium");
        $('#modal_massa_atomica').val("39,0983(1)");
        $('#modal_volume_atomico').val("45,3 cm³/mol");
        $('#modal_densidade').val("0,86 g/cm³");
        $('#modal_fusao').val("63,65 °C");
        $('#modal_ebulicao').val("774 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("2,35 Å");
        $('#modal_eletronegatividade').val("0,82");
        $('#modal_ionizacao').val("4,341 V");
        $('#modal_raio_covalente').val("2,03 Å");
        $('#modal_raio_ionico').val("1,33E+1 Å");
        $('#modal_camadas').val("2,8,8,1");
        $('#modal_condutividade_aletrica').val("16,4 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ar] 4s1");
        $('#modal_orbital').val("4s1");
        abrir_modal();
    });

    $('#btn_rb').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Rubídio ');
        $('#modal_num_atomico').val('37');
        $('#modal_img').html("<img src='imagens/rubidio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Bunsen e Kirchoff / 1861");
        $('#modal_origem_nome').val("latim rubidius que significa vermelho escuro");
        $('#modal_massa_atomica').val("85,4678(3)");
        $('#modal_volume_atomico').val("55,9 cm³/mol");
        $('#modal_densidade').val("1,53 g/cm³");
        $('#modal_fusao').val("38,89 °C");
        $('#modal_ebulicao').val("688 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("2,48 Å");
        $('#modal_eletronegatividade').val("0,82");
        $('#modal_ionizacao').val("4,177 V");
        $('#modal_raio_covalente').val("2,16 Å");
        $('#modal_raio_ionico').val("1,48E+1 Å");
        $('#modal_camadas').val("2,8,18,8,1");
        $('#modal_condutividade_aletrica').val("47,8 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Kr] 5s1");
        $('#modal_orbital').val("5s1");
        abrir_modal();
    });
    
    $('#btn_cs').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Césio');
        $('#modal_num_atomico').val('55');
        $('#modal_img').html("<img src='imagens/cesio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Robert Bunsen e Gustav Kirchhoff / 1860 ");
        $('#modal_origem_nome').val("Do lat. cient. caesium < lat. caesiu, 'esverdeado'");
        $('#modal_massa_atomica').val("132,9054519(2)");
        $('#modal_volume_atomico').val("70 cm³/mol");
        $('#modal_densidade').val("1,87 g/cm³");
        $('#modal_fusao').val("28,5 °C");
        $('#modal_ebulicao').val("678,4 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("2,67 Å");
        $('#modal_eletronegatividade').val("0,79");
        $('#modal_ionizacao').val("3,894 V");
        $('#modal_raio_covalente').val("2,35 Å");
        $('#modal_raio_ionico').val("1,69E+1  Å");
        $('#modal_camadas').val("2,8,18,18,8,1");
        $('#modal_condutividade_aletrica').val("");
        $('#modal_configuracao_eletronica').val("[Xe] 6s1");
        $('#modal_orbital').val("6s1");
        abrir_modal();
    });
    
    $('#btn_fr').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Frâncio');
        $('#modal_num_atomico').val('87');
        $('#modal_img').html("<img src='imagens/francio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Perey / 1939 ");
        $('#modal_origem_nome').val("De topônimo França + -io³; latim cient. francium");
        $('#modal_massa_atomica').val("223,0197*");
        $('#modal_volume_atomico').val("");
        $('#modal_densidade').val("");
        $('#modal_fusao').val("27 °C");
        $('#modal_ebulicao').val("677 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("---");
        $('#modal_raio_atomico').val("1,34 Å");
        $('#modal_eletronegatividade').val("0,7");
        $('#modal_ionizacao').val("0 V");
        $('#modal_raio_covalente').val("---");
        $('#modal_raio_ionico').val("1,76E+1 Å");
        $('#modal_camadas').val("2,8,18,32,18,8,1");
        $('#modal_condutividade_aletrica').val("---");
        $('#modal_configuracao_eletronica').val("[Rn] 7s1");
        $('#modal_orbital').val("7s1");
        abrir_modal();
    });
    
    $('#btn_be').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Berílio');
        $('#modal_num_atomico').val('4');
        $('#modal_img').html("<img src='imagens/berilio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Nicholas Louis Vauquelin / 1798");
        $('#modal_origem_nome').val("Do mineral berilo, 'esmeralda'");
        $('#modal_massa_atomica').val("9,012182(3)");
        $('#modal_volume_atomico').val("5 cm³/mol");
        $('#modal_densidade').val("1,848 g/cm³");
        $('#modal_fusao').val("1286,85 °C");
        $('#modal_ebulicao').val("2970,56 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Hexagonal Compacta");
        $('#modal_raio_atomico').val("1,12 Å");
        $('#modal_eletronegatividade').val("1,57");
        $('#modal_ionizacao').val("9,322 V");
        $('#modal_raio_covalente').val("0,90 Å");
        $('#modal_raio_ionico').val("0,31E+2 Å");
        $('#modal_camadas').val("2,2");
        $('#modal_condutividade_aletrica').val("25 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[He] 2s2");
        $('#modal_orbital').val("2s2");
        abrir_modal();
    });

    $('#btn_mg').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Magnésio');
        $('#modal_num_atomico').val('12');
        $('#modal_img').html("<img src='imagens/magnesio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1808");
        $('#modal_origem_nome').val("Homenagem a Magnésia, antiga cidade da Ásia Menor");
        $('#modal_massa_atomica').val("24,3050(6)");
        $('#modal_volume_atomico').val("14 cm³/mol");
        $('#modal_densidade').val("1,74 g/cm³");
        $('#modal_fusao').val("638,8 °C");
        $('#modal_ebulicao').val("1090 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Hexagonal Compacta");
        $('#modal_raio_atomico').val("1,6 Å");
        $('#modal_eletronegatividade').val("1,31");
        $('#modal_ionizacao').val("7,646 V");
        $('#modal_raio_covalente').val("1,36 Å");
        $('#modal_raio_ionico').val("0,65E+2 Å");
        $('#modal_camadas').val("2,8,2");
        $('#modal_condutividade_aletrica').val("22,4 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ne] 3s2");
        $('#modal_orbital').val("3s2");
        abrir_modal();
    });

    $('#btn_ca').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Cálcio ');
        $('#modal_num_atomico').val('20');
        $('#modal_img').html("<img src='imagens/calcio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1808");
        $('#modal_origem_nome').val("Do V.C.I. calcio- < lat. cient. calcium < lat. calx, cálcis, 'cal'");
        $('#modal_massa_atomica').val("40,078(4)");
        $('#modal_volume_atomico').val("29,9 cm³/mol");
        $('#modal_densidade').val("1,55 g/cm³");
        $('#modal_fusao').val("839 °C");
        $('#modal_ebulicao').val("1484,4 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Face Centrada");
        $('#modal_raio_atomico').val("1,97 Å");
        $('#modal_eletronegatividade').val("1,00");
        $('#modal_ionizacao').val("6,113 V");
        $('#modal_raio_covalente').val("1,74 Å");
        $('#modal_raio_ionico').val("0,99E+2 Å");
        $('#modal_camadas').val("2,8,8,2");
        $('#modal_condutividade_aletrica').val("31,3 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ar] 4s2");
        $('#modal_orbital').val("4s2");
        abrir_modal();
    });

    $('#btn_sr').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Estrôncio');
        $('#modal_num_atomico').val('38');
        $('#modal_img').html("<img src='imagens/estroncio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Crawford / 1790");
        $('#modal_origem_nome').val("Do lat. cient. strontium");
        $('#modal_massa_atomica').val("87,62(1)");
        $('#modal_volume_atomico').val("33,7 cm³/mol");
        $('#modal_densidade').val("2,6 g/cm³");
        $('#modal_fusao').val("769 °C");
        $('#modal_ebulicao').val("1384 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Face Centrada");
        $('#modal_raio_atomico').val("2,15 Å");
        $('#modal_eletronegatividade').val("0,95");
        $('#modal_ionizacao').val("5,695 V");
        $('#modal_raio_covalente').val("1,91 Å");
        $('#modal_raio_ionico').val("1,13E+2 Å");
        $('#modal_camadas').val("2,8,18,8,2");
        $('#modal_condutividade_aletrica').val("5 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Kr] 5s2");
        $('#modal_orbital').val("5s2");
        abrir_modal();
    });

    $('#btn_ba').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Bário ');
        $('#modal_num_atomico').val('56');
        $('#modal_img').html("<img src='imagens/bario.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1808");
        $('#modal_origem_nome').val("---");
        $('#modal_massa_atomica').val("137,327(7)");
        $('#modal_volume_atomico').val("39 cm³/mol");
        $('#modal_densidade').val("3,5 g/cm³");
        $('#modal_fusao').val("725 °C");
        $('#modal_ebulicao').val("1140 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("2,22 Å");
        $('#modal_eletronegatividade').val("0,89");
        $('#modal_ionizacao').val("5,212 V");
        $('#modal_raio_covalente').val("1,98 Å");
        $('#modal_raio_ionico').val("1,35E+2 Å");
        $('#modal_camadas').val("2,8,18,18,8,2");
        $('#modal_condutividade_aletrica').val("5,3 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Xe] 6s2");
        $('#modal_orbital').val("6s2");
        abrir_modal();
    });

    $('#btn_ra').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Rádio');
        $('#modal_num_atomico').val('88');
        $('#modal_img').html("<img src='imagens/radio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Curie / 1898");
        $('#modal_origem_nome').val("Do latim cient. radium latim radiare, 'irradiar'");
        $('#modal_massa_atomica').val("226,0254*");
        $('#modal_volume_atomico').val("45,2 cm³/mol");
        $('#modal_densidade').val("5 g/cm³");
        $('#modal_fusao').val("700 °C");
        $('#modal_ebulicao').val("1737 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("2,7 Å");
        $('#modal_eletronegatividade').val("0,9");
        $('#modal_ionizacao').val("5,279  V");
        $('#modal_raio_covalente').val("---");
        $('#modal_raio_ionico').val("1,40E+2 Å");
        $('#modal_camadas').val("2,8,18,32,18,8,2");
        $('#modal_condutividade_aletrica').val("---");
        $('#modal_configuracao_eletronica').val("[Rn] 7s2");
        $('#modal_orbital').val("7s2");
        abrir_modal();
    });
    
    $('#btn_sc').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Escândio');
        $('#modal_num_atomico').val('21');
        $('#modal_img').html("<img src='imagens/escandio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Nilson / 1876");
        $('#modal_origem_nome').val("do latim científico 'scandĭum', e este de 'Scandi', Escandinávia)");
        $('#modal_massa_atomica').val("44,955912(6)");
        $('#modal_volume_atomico').val("15 cm³/mol");
        $('#modal_densidade').val("3,0 g/cm³");
        $('#modal_fusao').val("1539 °C");
        $('#modal_ebulicao').val("2832 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Hexagonal Compacta");
        $('#modal_raio_atomico').val("1,62 Å");
        $('#modal_eletronegatividade').val("1,36");
        $('#modal_ionizacao').val("6,54 V");
        $('#modal_raio_covalente').val("1,44 Å");
        $('#modal_raio_ionico').val("0,81E+3 Å");
        $('#modal_camadas').val("2,8,9,2");
        $('#modal_condutividade_aletrica').val("1,5 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ar] 3d1,4s2");
        $('#modal_orbital').val("3d1");
        abrir_modal();
    });
    
    $('#btn_y').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Ítrio ');
        $('#modal_num_atomico').val('39');
        $('#modal_img').html("<img src='imagens/itrio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Gadolin / 1794");
        $('#modal_origem_nome').val("---");
        $('#modal_massa_atomica').val("88,90585(2)");
        $('#modal_volume_atomico').val("19,8 cm³/mol");
        $('#modal_densidade').val("4,5 g/cm³");
        $('#modal_fusao').val("1523 °C");
        $('#modal_ebulicao').val("3337 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Hexagonal Compacta");
        $('#modal_raio_atomico').val("1,78 Å");
        $('#modal_eletronegatividade').val("1,22");
        $('#modal_ionizacao').val("6,38 V");
        $('#modal_raio_covalente').val("1,62 Å");
        $('#modal_raio_ionico').val("0,93E+3 Å");
        $('#modal_camadas').val("2,8,18,9,2");
        $('#modal_condutividade_aletrica').val("---");
        $('#modal_configuracao_eletronica').val("[Kr] 4d1,5s2");
        $('#modal_orbital').val("4d1");
        abrir_modal();
    });
    

  $('.window .close').click(function (e) {
    e.preventDefault();
    $('.window').hide();
  });
}



function abrir_modal(){
  $('#dialog').slideDown(1000).draggable();
}

