window.onload = function(){

  var pag = window.location.pathname;
  pag = pag.split("/");
  switch(pag[5]){
    case 'index.html':
    Confg_Tipo_Elemento();
    break; 
  }
}

function Confg_Tipo_Elemento(){
	metais_alcalinos.onmouseover = function(){
    show_all_elemento(); 
    hidden_all_elemento('metais_alcalinos');
  }
  metais_alcalinos_terrosos.onmouseover = function(){
    show_all_elemento(); 
    hidden_all_elemento('metais_alcalinos_terrosos');
  }
  tabela.onmouseover = function(){
    show_all_elemento();
  }
  div_legend_estado.onmouseover = function(){
    show_all_elemento(); 
  }
}

function hidden_all_elemento(valor){

  var elementos = [
    "nao_metais",
    "metais_alcalinos",
    "metais_alcalinos_terrosos"
  ];

  for(j=0;j<elementos.length;j++){
    if(elementos[j] != valor){
      var getClass = document.getElementsByClassName(elementos[j]);
      for(i=1;i<getClass.length;i++){
         document.getElementsByClassName(elementos[j])[i].style.visibility = "hidden";
      } 
    }   
  }  
}

function show_all_elemento(){   
    var elementos = [
    "nao_metais",
    "metais_alcalinos",
    "metais_alcalinos_terrosos"
    ];
    for(j=0;j<elementos.length;j++){
    var getClass = document.getElementsByClassName(elementos[j]);
      for(i=1;i<getClass.length;i++){
         document.getElementsByClassName(elementos[j])[i].style.visibility = "visible";
      }  
    }  
}
