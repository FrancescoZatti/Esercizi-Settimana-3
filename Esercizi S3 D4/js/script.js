//Tabellone 
let tabellone = document.querySelector('#tabellone');
let numeriEstratti = [];

for (let i = 1; i <= 76; i++) {
    let  cella = document.createElement("div");
    cella.innerText = [i];
    cella.className = "cellaTabellone"
    tabellone.appendChild(cella);
    console.log(cella);
}

let genNum = document.querySelector('form input[name="estrai"]');
genNum.addEventListener('click', () => {
    let num;

    do {
        num = Math.ceil(Math.random() * 76);
    } while (numeriEstratti.includes(num));

    console.log(num);
    numeriEstratti.push(num);
    
    let nSelect = document.querySelectorAll('#tabellone div');
    nSelect.forEach(n => {
        nSelect[num - 1].style.backgroundColor = 'red';
    })
});

//Tabella giocatore

let giocatori = document.querySelector('.giocatore')
let genP = document.querySelector('form input[name="creaGiocatore"]')

genP.addEventListener('click', () => {
    let creaPlayer =document.createElement('div');
    let Player = giocatori.appendChild(creaPlayer);

        for (let i = 1; i <= 24; i++) {
            let  cella = document.createElement("div");
            cella.className = "cellaGiocatore"
            let numeroCella = Math.ceil(Math.random() * 76);
            cella.innerText = numeroCella;
            /*let cellaContent = [];

            (cellaContent.includes(numeroCella));

            let cellaP = document.querySelectorAll('.giocatore .cellaGiocatore')
            cellaP.forEach(n => {
                cellaP.innerText[numeroCella];
            })*/

            Player.appendChild(cella);
            console.log(cella);
        }
});
