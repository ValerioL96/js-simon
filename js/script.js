//Visualizzare in pagina 5 numeri casuali.

//1) creo un array vuoto;

const numbersIa = [];

//2) creo un ciclo while in cui dico che finchè la lunghezza di array è minore uguale a 5, continua a stampare numeri random casuali; 

while(numbersIa.length < 5){

     let numbersRandomIA = Math.floor(Math.random()*20);
     numbersIa.push(numbersRandomIA);
     console.log(numbersRandomIA)
}

//Da lì parte un timer di 30 secondi.

//3) dopo aver stampato i 5 numri mi creo una funzione asincro che mi faccia un countdown di 30 secondi;


let seconds = [];

const timerSeconds = setInterval(function(){
    seconds ++ ;
    console.log(seconds);

    if(seconds.length <= 30 ){
        
        clearInterval(timerSeconds);
        alert('Finite time');
    }
}, 1000);

//Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

