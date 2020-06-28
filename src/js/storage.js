$(document).ready(function () {
    $('#rezerwuj').click(function () {
        var dane = {};
        dane.imie = $('#imie').val();
        dane.nazwisko = $('#nazwisko').val();
        dane.email = $('#email').val();
        dane.tel = $('#tel').val();
        dane.miasto = $('#miasto').val();
        dane.adres = $('#adres').val();
        dane.zip = $('#kod_pocztowy').val();
        dane.wycieczka = $('#oferta').val();
        dane.wyjazd = $('#wyjazd').val();
        dane.powrot = $('#powrot').val();
        dane.iloscPodr = $('#podrozujący').val();
        dane.pokoje = $('#pokoje').val();
        var dzieci;
        document.getElementsByName('dzieci').forEach(value => {
            if (value.checked) {
                dzieci = value.value;
            }
        })
        dane.dzieci = dzieci;
        var opcje = [];
        let i = 0;
        document.getElementsByName('opcje').forEach(value => {
            if (value.checked) {
                opcje[i] = value.value;
                i++;
            }
        })

        dane.opcje = opcje;

        if (validates('')) {
            var lista = JSON.parse(localStorage.getItem('lista'));
            if (lista === null) lista = [];
            lista.push(dane);
            localStorage.setItem('lista', JSON.stringify(lista));
        }

    });
    $('#zmien').click(function () {
        var index = sessionStorage.getItem('doZmiany');
        var lista = JSON.parse(localStorage.getItem('lista'));
        var element = lista[index];

        element.imie = $('#editimie').val();
        element.nazwisko = $('#editnazwisko').val();
        element.email = $('#editemail').val();
        element.tel = $('#edittel').val();
        element.miasto = $('#editmiasto').val();
        element.adres = $('#editadres').val();
        element.zip = $('#editkod_pocztowy').val();
        element.wycieczka = $('#editoferta').val();
        element.wyjazd = $('#editwyjazd').val();
        element.powrot = $('#editpowrot').val();
        element.iloscPodr = $('#editpodrozujący').val();
        element.pokoje = $('#editpokoje').val();
        var dzieci;
        document.getElementsByName('editdzieci').forEach(value => {
            if (value.checked) {
                dzieci = value.value;
            }
        })
        element.dzieci = dzieci;
        var opcje = [];
        let i = 0;
        document.getElementsByName('editopcje').forEach(value => {
            if (value.checked) {
                opcje[i] = value.value;
                i++;
            }
        })

        element.opcje = opcje;
        if (validates('edit')) {
            localStorage.setItem('lista', JSON.stringify(lista));
            pokazListe();
            sessionStorage.removeItem('doZmiany');
        }
    });
    $('#zamknij').click(function () {
        sessionStorage.removeItem('doZmiany');
    });

    $('#wyczysc').click(function () {
        localStorage.clear();
        $('#lista').html('');
    });
});

function validates(str) {
    return (document.getElementById(str + 'imie').checkValidity() && document.getElementById(str + 'nazwisko').checkValidity() && document.getElementById(str + 'email').checkValidity() && document.getElementById(str + 'tel').checkValidity() &&
        document.getElementById(str + 'miasto').checkValidity() && document.getElementById(str + 'adres').checkValidity() && document.getElementById(str + 'kod_pocztowy').checkValidity() && document.getElementById(str + 'oferta').checkValidity() &&
        document.getElementById(str + 'wyjazd').checkValidity() && document.getElementById(str + 'powrot').checkValidity() && document.getElementById(str + 'podrozujący').checkValidity() && document.getElementById(str + 'pokoje').checkValidity());
}

function pokazListe() {
    var lista = JSON.parse(localStorage.getItem('lista'));
    var el = document.getElementById('lista');
    var str = "<h2 class='my-4 text-primary'>Lista wycieczek:</h2>";
    if (lista === null || lista.length === 0) el.innerHTML = str + "<p>Nie dodano wycieczek</p>";
    else {
        for (let i = 0; i < lista.length; i++) {
            let pozycja = i + 1;
            let opcje = (lista[i].opcje.length !== 0) ? lista[i].opcje : 'Brak opcji';
            str += '<div class="row my-2">' +
                '<div class="col-4">' +
                '<div class="input-group">' +
                "<button class='btn btn-outline-danger' onclick='usunZadanie(" + i + ")' >X </button>" +
                "<button type='button' data-toggle='modal' data-target='#exampleModal' class='btn btn-outline-info' onclick='edytujZadanie(" + i + ")' >Edytuj </button>" +
                '</div>' +
                '</div>' +
                '<div class="col-8">' +
                '<h3 class="text-primary">Pozycja nr ' + pozycja + '</h3>' +
                "<table>" +
                "<tr>" +
                "<td > Imię i nazwisko: </td>" +
                "<td>" + lista[i].imie + " " + lista[i].nazwisko + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td > Adres e-mail: </td>" +
                "<td>" + lista[i].email + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td > Telefon: </td>" +
                "<td>" + " " + lista[i].tel + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Miasto: </td>" +
                "<td>" + lista[i].miasto + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Adres: </td>" +
                "<td>" + " " + lista[i].adres + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Kod pocztowy: </td>" +
                "<td>" + " " + lista[i].zip + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Wycieczka do: </td>" +
                "<td>" + " " + lista[i].wycieczka + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Data wyjazdu: </td>" +
                "<td>" + " " + lista[i].wyjazd + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Data powrotu: </td>" +
                "<td>" + " " + lista[i].powrot + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Liczba podróżujących: </td>" +
                "<td>" + " " + lista[i].iloscPodr + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Pokoje: </td>" +
                "<td>" + " " + lista[i].pokoje + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Ilosc dzieci: </td>" +
                "<td>" + " " + lista[i].dzieci + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td >Opcje: </td>" +
                "<td>" + " " + opcje + "</td>" +
                "</tr>" +
                "</table>" +
                '</div>' +
                '</div>';
        }
        el.innerHTML = str;

    }
}

function usunZadanie(i) {
    var lista = JSON.parse(localStorage.getItem('lista'));
    if (confirm("Usunąć pozycje?")) lista.splice(i, 1);
    localStorage.setItem('lista', JSON.stringify(lista));
    pokazListe();
}

function edytujZadanie(i) {
    var lista = JSON.parse(localStorage.getItem('lista'));
    $('#editimie').val(lista[i].imie);
    $('#editnazwisko').val(lista[i].nazwisko);
    $('#editemail').val(lista[i].email);
    $('#edittel').val(lista[i].tel);
    $('#editmiasto').val(lista[i].miasto);
    $('#editadres').val(lista[i].adres);
    $('#editkod_pocztowy').val(lista[i].zip);
    $('#editoferta').val(lista[i].wycieczka);
    $('#editwyjazd').val(lista[i].wyjazd);
    $('#editpowrot').val(lista[i].powrot);
    $('#editpodrozujący').val(lista[i].iloscPodr);
    $('#editpokoje').val(lista[i].pokoje);

    document.getElementsByName('editdzieci').forEach(value => {
        value.checked = value.value === lista[i].dzieci;
    })

    let index = 0;
    document.getElementsByName('editopcje').forEach(value => {
        if (lista[i].opcje[index] === value.value) {
            value.checked = true;
            index++;
        }
    })


    sessionStorage.setItem('doZmiany', i);
}