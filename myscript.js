/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto
precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.*/

let numGenerator = document.getElementById("dm_button");

numGenerator.addEventListener("click", function(){
    let numArr = []; //array contentente i numeri da far visualizzare

    const showNumbers = document.getElementById("dm_bg_num");
    showNumbers.innerHTML = "";

    //ciclo per pushare i numeri nell'array
    for (i=0; i<5; i++){
        numArr.push(numsCreator());
    }
    //console.log(numArr)
    
    showNumbers.innerHTML += `<span class="dm_numbers"> ${numArr} </span>`

    
    /* Dopo tot secondi ("o meglio, millisecondi") parte la funzione
    per richiedere all'utente di inserire i numeri */
    setTimeout(askNumbers, 3000);
    
})



function askNumbers(){
    //creo un array per contenere i numeri inseriti dall'utente
    let userNumArr = [];
    const positions = ["primo", "secondo", "terzo", "quarto", "quinto"];
    for (i=0; i<5; i++){
        userNumArr.push(prompt(`Inserisci il  ${positions[i]} numero`));
        
    }
    console.log(userNumArr);
}


//funzione per generare i numeri
function numsCreator(){
    let newNumber = parseInt(Math.floor(Math.random() * 50) + 1);
    return newNumber;
}