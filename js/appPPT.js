// Declaramos las variables.

var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");

var start = document.getElementById("start_game");

var img_opt_player1 = document.getElementById("player1");
var img_opt_player2 = document.getElementById("player2");

var pts_player1 = document.getElementById("puntos_player1").innerText;
var pts_player2 = document.getElementById("puntos_player2").innerText;

var select_player1;
var select_player2;
var vs;


// Creamos la función para iniciar el juego
start.onclick = function(){
  select_player2 = opt_radom(val_opt_radom.toString()); //Nos trae el valor del arreglo de abajo y lo convertimos a string 'toString'
  display_option_player2(select_player2);
  game_vs(select_player1, select_player2);
  
  console.log(select_player1, select_player2);
}


// Creamos una función para que halla un cambio de estado,
opt_piedra.onclick = function(){
  select_player1 = "piedra";
  img_opt_player1.src = "assets/img/img-ppt/piedra_izquierda.svg"
  img_opt_player2.src = "assets/img/img-ppt/cpu.svg"
}

opt_papel.onclick = function(){
  select_player1 = "papel";
  img_opt_player1.src = "assets/img/img-ppt/papel_izquierda.svg"
  img_opt_player2.src = "assets/img/img-ppt/cpu.svg"
}

opt_tijera.onclick = function(){
  select_player1 = "tijera";
  img_opt_player1.src = "assets/img/img-ppt/tijera_izquierda.svg"
  img_opt_player2.src = "assets/img/img-ppt/cpu.svg"
}

// Creamos la variable y su función que almacene el valor al azar de player2
var val_opt_radom = ["piedra","papel", "tijera"];
function opt_radom(){
  return[...val_opt_radom]
  .sort(()=>Math.random() > 0.5 ? 1:-1) //Nos devuelve una copia del arreglo inicial, pero de forma desordenada.
  .slice(0,1); //Nos devuelve unicamente la primer posición. 
}

// Creamos la función para que cambien la imagen y esta coincida con lo seleccionado en val_opt_radom.
function display_option_player2(select_player2){
  if (select_player2 == "piedra"){
      img_opt_player2.src = "assets/img/img-ppt/piedra_derecha.svg";
  } else if (select_player2 == "papel"){
      img_opt_player2.src = "assets/img/img-ppt/papel_derecha.svg";
  } else {
      img_opt_player2.src = "assets/img/img-ppt/tijera_derecha.svg";
  }
}

// Creamos las funciones que se encargaran de llevar el contador de los ganadores.
function game_vs(select_player1, select_player2){
  if(select_player1 == "piedra"){ //Si lo que selecciono player 1 es igual a piedra
    if(select_player2 == "piedra"){ // y lo que selecciono player 2 también es igual a piedra
      vs = "same"; // Entonces la variable 'vs' es igual a same
    }else if(select_player2 == "papel"){
      vs = "p2win";
    }else{
      vs = "p1win"
    }
  }else  if(select_player1 == "papel"){ //Si lo que selecciono player 1 es igual a papel
    if(select_player2 == "papel"){ // y lo que selecciono player 2 también es igual a papel
      vs = "same"; // Entonces la variable 'vs' es igual a same
    }else if(select_player2 == "tijera"){
      vs = "p2win";
    }else{
      vs = "p1win"
    }
  }else   if(select_player1 == "tijera"){ //Si lo que selecciono player 1 es igual a tijera
    if(select_player2 == "tijera"){ // y lo que selecciono player 2 también es igual a tijera
      vs = "same"; // Entonces la variable 'vs' es igual a same
    }else if(select_player2 == "piedra"){
      vs = "p2win";
    }else{
      vs = "p1win"
    }
  }

  // Creamos la función para cambiar el texto y mostrar la puntuación
  if(vs == "p1win"){
    document.getElementById("result").innerText = "Player 1 Gana 😎";
    document.getElementById("result").style.color = "greenyellow";
    pts_player1++; 
    document.getElementById("puntos_player1").innerText = pts_player1;
  }else if(vs == "same"){
    document.getElementById("result").innerText = "Empate 😛";
    document.getElementById("result").style.color = "yellow";
  }else if(vs == "p2win"){
    document.getElementById("result").innerText = "Player 2 Gana 😑";
    document.getElementById("result").style.color = "red";
    pts_player2++; 
    document.getElementById("puntos_player2").innerText = pts_player2;
  }

}


/* // Por ultimo creamos la función para que reinicie el juego
const reload = document.getElementById('reset_game');
reload.addEventListener('click', _ => {
    location.reload();
});
 */

var resetButton = document.getElementById("reset_game");

resetButton.onclick = function() {
  // Reiniciamos las imágenes de los jugadores
  img_opt_player1.src = "assets/img/img-ppt/persona.svg";
  img_opt_player2.src = "assets/img/img-ppt/cpu.svg";
  
  // Reiniciamos el resultado del juego
  document.getElementById("result").innerText = "VS";
  document.getElementById("result").style.color = "";
  
  // Reiniciamos los puntos de los jugadores
  pts_player1 = 0;
  pts_player2 = 0;
  document.getElementById("puntos_player1").innerText = pts_player1;
  document.getElementById("puntos_player2").innerText = pts_player2;
}
