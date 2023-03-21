
const prezzoAlKm = 0.21 ;
const kmDaPercorrere = prompt ('Quanti Km vuoi percorrere?');
const anniUtente = prompt ('Quanti anni hai?');
console.log(kmDaPercorrere, anniUtente);

let prezzoTotale = (prezzoAlKm * kmDaPercorrere);

document.getElementById('kmToDo').innerHTML = kmDaPercorrere + 'Km'

if (anniUtente < 18 ) {
  prezzoTotale -= (prezzoTotale / 100)* 20
}else if (anniUtente >= 65) {
  prezzoTotale -= (prezzoTotale / 100)* 40
}

 console.log(prezzoTotale);

 document.getElementById('totalPrice').innerHTML = prezzoTotale.toFixed(2) + '€'