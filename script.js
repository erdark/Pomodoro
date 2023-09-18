/* const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const start = document.getElementById("start");
const etat = document.getElementById("etat");
const arret_interval = undefined;

function affichSecondes (secondes) {
    let secondeschr = secondes.toString()
    secondeschr = secondeschr.length < 2 ? '0' + secondeschr : secondeschr
    return secondeschr
}
function ecoule_temps(){
    if(start.textContent == "start"){
        clearTimeout(arret_interval);
    }
    if(secondes.textContent == 0 && minutes.textContent != 0){
        minutes.textContent = minutes.textContent - 1;
        secondes.textContent = 60;
    }
    if(secondes.textContent > 0){
        secondes.textContent = secondes.textContent - 1;
    }
    secondes.textContent = affichSecondes(secondes.textContent)
    minutes.textContent = affichSecondes(minutes.textContent)
}

function depart(){
    if(start.textContent == "start"){
        start.textContent = "reset";
    }
    else if(start.textContent == "reset"){
        start.textContent = "start";
    }
    if(etat.textContent == "work"){
        minutes.textContent = "25";
        secondes.textContent = "00";
        arret_interval = setInterval(ecoule_temps, 1000);
        etat.textContent = "pause";
    }
    else if(etat.textContent == "pause"){
        minutes.textContent = "5";
        secondes.textContent = "00";
        arret_interval = setInterval(ecoule_temps, 1000);
        etat.textContent = "work";
    }
}

start.addEventListener("click", depart);
*/
const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const start = document.getElementById("start");
const etat = document.getElementById("etat");
let work = 1;
let arret_interval = undefined; // Utilisez let au lieu de const pour pouvoir réassigner la variable

function affichSecondes(secondes) {
    let secondeschr = secondes.toString();
    secondeschr = secondeschr.length < 2 ? '0' + secondeschr : secondeschr;
    return secondeschr;
}

function ecoule_temps() {
    
    if (start.textContent === "start") {
        clearInterval(arret_interval); // Efface l'intervalle précédent
        return;
    }
    if (secondes.textContent == 0 && minutes.textContent != 0) {
        minutes.textContent = minutes.textContent - 1;
        secondes.textContent = 60;
    }
    if (secondes.textContent > 0) {
        secondes.textContent = secondes.textContent - 1;
    }
    secondes.textContent = affichSecondes(secondes.textContent);
    minutes.textContent = affichSecondes(minutes.textContent);
}

function depart() {
    if (start.textContent == "start") {
        start.textContent = "reset";
        if (work == 1) {
            minutes.textContent = "2";
            secondes.textContent = "00";
            clearInterval(arret_interval); // Efface l'intervalle précédent
            arret_interval = setInterval(ecoule_temps, 100);
            etat.textContent = "pause";
            work = 0;
        } 
        else if (work == 0) {
            minutes.textContent = "1";
            secondes.textContent = "00";
            clearInterval(arret_interval); // Efface l'intervalle précédent
            arret_interval = setInterval(ecoule_temps, 100);
            etat.textContent = "work";
            work = 1;
        }
    }
    else if (start.textContent == "reset") {
        start.textContent = "start";
        minutes.textContent = "25";
        secondes.textContent = "00";
    }
    if(minutes.textContent == 0 & secondes.textContent == 0){
        console.log("ici")
        depart()
    }
}

start.addEventListener("click", depart);

