window.onload = function(){
  //var pag = window.location.pathname;
  //pag = pag.split("/");
  //switch(pag[5]){
  //  case 'index.html':
    Confg_Tabela_Tipo();
    
    //break; 
  //}
}


function Confg_Tabela_Tipo(){
 nao_metais.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('nao_metais');
}
metais_alcalinos.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('metais_alcalinos');
}
metais_alcalinos_terrosos.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('metais_alcalinos_terrosos');
}
metais_transicao.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('metais_transicao');
}
lantanideos.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('lantanideos');
}
actinideos.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('actinideos');
}
metais_representativo.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('metais_representativo');
}
semi_metais.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('semi_metais');
}
halogenios.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('halogenios');
}
gases_nobres.onmouseover = function(){
  show_all_elemento(); 
  hidden_all_elemento('gases_nobres');
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
  "metais_alcalinos_terrosos",
  "metais_transicao",
  "lantanideos",
  "actinideos",
  "metais_representativo",
  "semi_metais",
  "halogenios",
  "gases_nobres"
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
  "metais_alcalinos_terrosos",
  "metais_transicao",
  "lantanideos",
  "actinideos",
  "metais_representativo",
  "semi_metais",
  "halogenios",
  "gases_nobres"
  ];
  for(j=0;j<elementos.length;j++){
    var getClass = document.getElementsByClassName(elementos[j]);
    for(i=1;i<getClass.length;i++){
     document.getElementsByClassName(elementos[j])[i].style.visibility = "visible";
   }  
 }  
}
