function otvoriMeni() {
    var menu = document.getElementsByClassName("navigation")[0];
    var atributi = getComputedStyle(menu);

    if (atributi.display == "none") {
        menu.style.display = "block";
    }

    else
        menu.style.display = "none";
}


function validirajIme(ime) {
    var imeRegex = /^[A-Z]{1}[a-z]+$/;

    if (ime == "" || ime == null || ime.lenght < 2 || !imeRegex.test(ime)) {
        document.getElementById("name").style.border = "1px solid red";
        return false;
    }

    else {
        document.getElementById("name").style.border = "1px solid #666666";
        return true;
    }
}

function validirajPrezime(prezime) {
    var prezimeRegex = /^[A-Z]{1}[a-z]+$/;

    if (prezime == "" || prezime == null || prezime.lenght < 2 || !prezimeRegex.test(prezime)) {
        document.getElementById("surname").style.border = "1px solid red";
        return false;
    }

    else {
        document.getElementById("surname").style.border = "1px solid #666666";
        return true;
    }

}

function validirajKontakt(kontakt) {
    var kontaktRegex = /^06[1-2]{1}\/[0-9]{3}\-[0-9]{3}$/;

    if (!kontaktRegex.test(kontakt) || kontakt == null || kontakt == "") {
        document.getElementById("contact").style.border = "1px solid red";
        return false;
    }

    else {
        document.getElementById("contact").style.border = "1px solid #666666";
        return true;
    }
}

function validirajBrojOsoba(brojOsoba) {
    if (brojOsoba == null || brojOsoba == "" || parseInt(brojOsoba) < 1 || parseInt(brojOsoba) > 15) {
        document.getElementById("person-number").style.border = "1px solid red";
        return false;
    }

    else {
        document.getElementById("person-number").style.border = "1px solid #666666";
        return true;
    }

}

function validirajDatum(datum) {
    var datumRegex = /^(20(19|2\d{1})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

    var tomorrow = new Date();
    var in7days = new Date(tomorrow.getTime() + (7 * 24 * 60 * 60 * 1000));

    var ddt = parseInt(tomorrow.getDate()) + 1;
    var mmt = tomorrow.getMonth() + 1;
    var yyyyt = tomorrow.getFullYear();
    if (ddt < 10) {
        ddt = '0' + ddt
    }
    if (mmt < 10) {
        mmt = '0' + mmt
    }
    tomorrow = yyyyt + '-' + mmt + '-' + ddt;

    var dd7 = in7days.getDate();
    var mm7 = in7days.getMonth() + 1;
    var yyyy7 = in7days.getFullYear();
    if (dd7 < 10) {
        dd7 = '0' + dd7
    }
    if (mm7 < 10) {
        mm7 = '0' + mm7
    }
    in7days = yyyy7 + "-" + mm7 + "-" + dd7;



    if (datum == null || datum == "" || !datumRegex.test(datum) || datum < tomorrow || datum > in7days) {
        document.getElementById("date").style.border = "1px solid red";
        return false;
    }


    else {
        document.getElementById("date").style.border = "1px solid #666666";
        return true;
    }

}

function validirajVrijeme(vrijeme) {
    var vrijemeRegex = /^((09||1\d{1}|20):[0-5]{1}[0-9]{1})|21:00$/;

    if (vrijeme == null || vrijeme == "" || !vrijemeRegex.test(vrijeme)) {
        document.getElementById("time").style.border = "1px solid red";
        return false;
    }

    else {
        document.getElementById("time").style.border = "1px solid #666666";
        return true;
    }
}

function zakaziRezervaciju() {
    var ime = $("#name").val();
    var prezime = $("#surname").val();
    var kontakt = $("#contact").val();
    var brojOsoba = $("#person-number").val();
    var datum = $("#date").val();
    var vrijeme = $("#time").val();

    if (validirajIme(ime) && validirajPrezime(prezime) && validirajKontakt(kontakt) && validirajBrojOsoba(brojOsoba) && validirajDatum(datum) && validirajVrijeme(vrijeme)) {
        var upisiPodatke = document.getElementById("info-place");

        upisiPodatke.innerHTML = "Ime: " + ime + "</br>" +
            "Prezime: " + prezime + "<br>" +
            "Kontakt: " + kontakt + "<br>" +
            "Broj osoba: " + brojOsoba + "<br>" +
            "Datum: " + datum + "<br>" +
            "Vrijeme: " + vrijeme;
    }

    else {
        alert("Podaci nisu pravilno uneseni. Nemoguće izvršiti rezervaciju.")
    }
}

$(document).ready(function () {
    $(".slider").slick({
        autoplay: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow')
    });
});