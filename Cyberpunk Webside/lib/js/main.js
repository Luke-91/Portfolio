/* log in */
function pruefen() {
    var email = document.getElementById("email");
    var ort = document.getElementById("passwort");
    if (email.value == "") {
        alert("Bitte geben Sie Ihren E-Mail an!");
        email.focus();
        return false;
    }
     if (passwort.value == "") {
        alert("Bitte geben Sie Ihr Passwort an!");
        passwort.focus();
        return false;
    }
}

/* pop up bilder */
function FensterOeffnen (Adresse) {
  MeinFenster = window.open(Adresse, "Zweitfenster", "width=300,height=400,left=100,top=200");
  MeinFenster.focus();
}

/* bilder und text einblenden */
function showStuff() {
    let hidden = document.getElementsByClassName('hidden');
    for(let i = 0 ; i < hidden.length; i++){
           if (hidden[i].style.display == "none") {
               hidden[i].style.display = "block"
           } else {
               hidden[i].style.display = "none"
           }
       }
  }

/* Warnung Textzeile */
$( function() {
	$("#text").on("keyup", function() {
		var aktuell = 120 - $(this).val().length;
		$("#zeichenanzahl").text(aktuell + "/120");
		console.log(aktuell);
		if(aktuell < 0){
			$(this).addClass("warnung");
		} else {
			$(this).removeClass("warnung");
		}
	});
});

/* Einstellungen ändern
          <form id="einstellungen" action=""
                  method="post" accept-charset="utf-8">
                <fieldset>
                    <ul>
                        <li>
                            <label for="hintergrund_farbe">Hintergrundfarbe</label>
                            <select name="hintergrund_farbe" id="hintergrund_farbe">
                                <option value="black">Schwarz</option>
                                <option value="white">Weiß</option>
                            </select>
                        </li>
                        <li>
                            <label for="text_farbe">Textfarbe</label>
                            <select name="text_farbe" id="text_farbe">
                                <option value="white">Weiß</option>
                                <option value="black">Schwarz</option>
                            </select>
                        </li>
                        <li>
                            <label for="schrift_groesse">Schriftgröße</label>
                            <select name="schrift_groesse" id="schrift_groesse">
                                <option value="1">klein</option>
                                <option value="1.5">mittel</option>
                                <option value="2">groß</option>
                            </select>
                        </li>
                    </ul>                
                </fieldset>
                <input type="submit" value="Änderungen speichern">            
            </form>

$(function() {
    einstellungenLaden();
    $ ('#einstellungen').on('submit', function(event) {
        event.preventDefault();
        einstellungenSpeichern();
    });
});
function einstellungenSpeichern() {
    localStorage.setItem("hintergrund_farbe", $("#hintergrund_farbe").val());
    localStorage.setItem("text_farbe", $("#text_farbe").val());
    localStorage.setItem("schrift_groesse", $("#schrift_groesse").val());
    einstellungenAnwenden();
}
function einstellungenAnwenden() {
    $("body").css({
        backgroundColor: $("#hintergrund_farbe").val(),
        color: $("#text_farbe").val(),
        fontSize: $("#schrift_groesse").val() + "rem"
    });
}
function einstellungenLaden() {
    var bgcolor = localStorage.getItem("hintergrund_farbe");
    var text_color = localStorage.getItem("text_farbe");
    var text_size = localStorage.getItem("schrift_groesse");
    
    $("#hintergrund_farbe").val(bgcolor);
    $("#text_farbe").val(text_color);
    %("#schrift_groesse").val(text_size);
    
    einstellungenAnwenden();
}
*/