// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.




//CONSEGNA 2

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe :bomba:.
//I numeri nella lista delle bombe non possono essere duplicati.
//In seguito l'utente clicca su una cella:
//se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
//la cella si colora di rosso e la partita termina,
//altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando:
// il giocatore clicca su una bomba
//o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio,
//cioè il numero di volte che l’utente 
//ha cliccato su una cella che non era una bomba.








// creazioni variabili 
//let failedBomb = []
let btn = document.getElementById('btn')
let grid = document.getElementById('grid')
let selezione = document.getElementById('selezione')
let score = 0
let celle = selezione.value
let safeNumber = []
let arrayBomb = genBomb()
// let btnReset = document.getElementById('btnReset')


// al click si refersha la pagina
btnReset.onclick = reload



// al click crea le celle in base alla difficoltà
btn.onclick = createCell



// funzioni


// funzione per refreshare la pagina 
function reload (){
   location.reload()
}



// funzione per creare le celle da 100 a 81 a 49
function createCell(){
    for(let i = 1; i <= selezione.value;i++){
        let content = document.createElement('div')
        content.classList.add('diff_' + selezione.value)
        grid.appendChild(content)
        content.addEventListener('click',colorCell)
        content.innerHTML = i
       
    } 
}






// generatore di bombe (numeri casuali)
function genBomb(){
    const failedBomb = []
    while (failedBomb.length !== 16){
        const failedBombs = getRandomInteger(1,selezione.value)
        if(!failedBomb.includes(failedBombs)){
            failedBomb.push(failedBombs)
        }
    }   
    return failedBomb
    
}
console.log(genBomb())




// funzione per colorare le celle al click
function colorCell(){
    console.log(this.innerText);
    console.log(arrayBomb)
    console.log(arrayBomb.includes(this.innerText));
    if(arrayBomb.includes(this.innerHTML)){
        this.classList.add('bgboxred')
        alert(`hai preso una bomba il tuo punteggio è : ${score}`)
    } else {
        this.classList.add('bgboxblue')
        score++
        console.log(score)
    
    }
}



//gen random number function

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(score == selezione.value - 16){
    alert(`Hai cliccato tutti i numeri e non hai preso neanche una bomba BRAVISSIMO il tuo punteggio è :  ${score}`)
}


// for(x = 1; x<= celle; x++ ){
//     safeNumber.push(x)
// }
// console.log(safeNumber)




// function safeNumber(){
//     const contents = [] 
//     while(contents.length == selezione.value){
//     const safe = celle - genBomb()
//     } if(contents !== genBomb()){
//         contents.push(safe)
//     }
//     return contents
// }

// console.log(safeNumber())

