window.onload = function(){

  var pag = window.location.pathname;
  pag = pag.split("/");
  switch(pag[5]){
    case 'index.html':
    metais_Alcalinos();
    break; 
  }
}

function metais_Alcalinos(){
	metais_alcalinos.onmouseover = function(){
    hidden_all_elemento('metais_alcalinos');
  }
  tabela.onmouseover = function(){
    var getClass = document.getElementsByClassName("nao_metais");
    for(i=1;i<getClass.length;i++)
    {
     document.getElementsByClassName("nao_metais")[i].style.visibility = "visible";
   }
 }
 div_legend_estado.onmouseover = function(){
  var getClass = document.getElementsByClassName("nao_metais");
  for(i=1;i<getClass.length;i++)
  {
   document.getElementsByClassName("nao_metais")[i].style.visibility = "visible";
 }
}
}

function hidden_all_elemento(valor){
  if(valor != 'nao_metais'){
    var getClass = document.getElementsByClassName("nao_metais");
    for(i=1;i<getClass.length;i++){
     document.getElementsByClassName("nao_metais")[i].style.visibility = "hidden";
    }
  }
  if(valor != 'metais_alcalinos'){
    var getClass = document.getElementsByClassName("metais_alcalinos");
    for(i=1;i<getClass.length;i++){
     document.getElementsByClassName("metais_alcalinos")[i].style.visibility = "hidden";
    }
  }  
}
