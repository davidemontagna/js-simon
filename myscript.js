/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto
precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati.*/

let numGenerator = document.getElementById("dm_button");

numGenerator.addEventListener("click", function(){
    let numArr = []; //array contentente i numeri da far visualizzare
    const showResult = document.getElementById("dm_result");
    const showNumbers = document.getElementById("dm_bg_num");
    showNumbers.innerHTML = "";
    
    //ciclo per pushare i numeri nell'array
    for (i=0; i<5; i++){
        numArr.push(numsCreator());
    }    
    showNumbers.innerHTML += `<span class="dm_numbers"> ${numArr} </span>`

    /* Dopo tot secondi ("o meglio, millisecondi") parte la funzione
    per richiedere all'utente di inserire i numeri */
    let userNumArr = [];
    
    setTimeout(deleteNums, 30000)
    setTimeout(askNumbers, 30500, numArr, userNumArr, showResult)
    
    //let counter = rightNum(numArr, userNumArr, showResult);
    
})

function rightNum(numArr, userNumArr, showResult){
    let count = 0;
    let countRights = [];
    for (i=0; i<5; i++){
        if(numArr.includes(userNumArr[i])){
            count++;
            countRights.push(userNumArr[i]);
        }        
    }

    if(count>0){
        showResult.innerHTML = `<h2 class="text-white">Hai inserito ${count} numero/i esatti: ${countRights}</h2>`;
    }else{
        showResult.innerHTML = `<h2 class="text-white">Non hai inserito nessun numero corretto</h2>`;
    }
    
}

//funzione per far sparire i numeri
function deleteNums(){
    const showNumbers = document.getElementById("dm_bg_num");
    showNumbers.innerHTML = "";
}

//funzione per fare inserire i numeri all'utente
function askNumbers(numArr, userNumArr, showResult){
    const positions = ["primo", "secondo", "terzo", "quarto", "quinto"];
    for (i=0; i<5; i++){
        userNumArr.push(parseInt(prompt(`Inserisci il  ${positions[i]} numero`)));
        
    }
    console.log(userNumArr);
    rightNum(numArr, userNumArr, showResult);
}

//funzione per generare i numeri
function numsCreator(){
    let newNumber = parseInt(Math.floor(Math.random() * 50) + 1);
    return newNumber;
}