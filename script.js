const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");
const start = document.getElementById("start");
const etat = document.getElementById("etat");

function affichSecondes (secondes) {
    let secondeschr = secondes.toString()
    secondeschr = secondeschr.length < 2 ? '0' + secondeschr : secondeschr
    return secondeschr
}
function ecoule_temps_travail(){
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
    start.textContent = "reset";
    if(etat.textContent == "work"){
        setInterval(ecoule_temps_travail, 1000);
    }
    else if(etat.textContent == "pause"){
        setInterval(ecoule_temps_pause, 1000);
    }
}

start.addEventListener("click", depart);
