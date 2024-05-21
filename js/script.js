//Visualizzare in pagina 5 numeri casuali.

//1) creo un array vuoto;

const numbersIa = [];

//2) creo un ciclo while in cui dico che finchè la lunghezza di array è minore uguale a 5, continua a stampare numeri random casuali; 

while(numbersIa.length < 5){

     let numbersRandomIA = Math.floor(Math.random()*20);
     numbersIa.push(numbersRandomIA);
     console.log(numbersRandomIA)
}
