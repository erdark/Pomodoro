const minutes = document.getElementById("minutes");
const secondes = document.getElementById("secondes");

function affichSecondes (secondes) {
    let secondeschr = secondes.toString()
    secondeschr = secondeschr.length < 2 ? '0' + secondeschr : secondeschr
    return secondeschr
}
function ecoule_temps(){
    if(secondes.textContent == 0){
        minutes.textContent = minutes.textContent - 1;
        secondes.textContent = 60;
    }
    secondes.textContent = secondes.textContent - 1;
    secondes.textContent = affichSecondes(secondes.textContent)
}

function depart(){
    setInterval(ecoule_temps, 1000);
}

chrono.addEventListener("click", depart);
