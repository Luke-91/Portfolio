var datum = new Date();
var tag = datum.getDate();
var monat = datum.getMonth() + 1;
var jahr = datum.getFullYear();
    document.getElementById("datum").innerHTML = tag + "." + monat + "." + jahr;

function austauschen(id, quelle) {
    document.getElementById(id).src = quelle;
}

function pruefen() {
    var nachname = document.getElementById("nachname");
    var ort = document.getElementById("email");
    if (nachname.value == "") {
        alert("Bitte geben Sie Ihren Nachnamen an!");
        nachname.focus();
        return false;
    }
     if (email.value == "") {
        alert("Bitte geben Sie Ihre E-Mail-Adresse an!");
        email.focus();
        return false;
    }
}