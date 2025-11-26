import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Creacion de una función flecha para obtener un número aleatorio dependiendo del largo del array.

const numeroAleatorio = (length) => Math.floor(Math.random() * length)

window.onload = function () {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  //Codigo depurado
  //let src = [who[Math.floor(Math.random() * who.length)], action[Math.floor(Math.random() * action.length)], what[Math.floor(Math.random() * what.length)], when[Math.floor(Math.random() * when.length)]]
  let src = [who[numeroAleatorio(who.length)], action[numeroAleatorio(action.length)], what[numeroAleatorio(what.length)], when[numeroAleatorio(when.length)]]
  document.getElementById('excuse').textContent = src.join(' ');
};
window.onload;