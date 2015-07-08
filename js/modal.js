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

  $('.window .close').click(function (e) {
    e.preventDefault();
    $('.window').hide();
  });
}



function abrir_modal(){
  $('#dialog').slideDown(1000);
}

