$(document).ready(function(){
  var pag = window.location.pathname;
  pag = pag.split("/");
  switch(pag[5]){
    case 'index.html':
    modal();
    break; 
  }
});

function modal(){
  $('#btn_h').click(function(e) {
    e.preventDefault();
    $('#title_modal').text('Hidrogênio');
    $('#modal_num_atomico').val('1');
    $('#dialog').fadeIn(2000);
  });









  $('.window .close').click(function (e) {
    e.preventDefault();
    $('.window').hide();
  });
}

