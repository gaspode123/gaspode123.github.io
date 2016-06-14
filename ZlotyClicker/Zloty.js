
      /*
      * Liste:
      * Zloty = 0
      * Dollar = 1
      * Euro = 2
      * Yen = 3
      * Pfund = 4
      */
var clicks2 = 0;
var num = 1000;
var i = 1;
var verdienstproclick = document.getElementById("wert");
var kostennclick = document.getElementById("kostenclick");
var geld = document.getElementById("clicks");
var geldInt = 0;
var clicksSecond = 0;
var neu;
var n = 1;
var verdienst;
var i = 1;
var verdienstprosekunde = document.getElementById("wert1");
var kostensec = document.getElementById("kostensec");
var clicks = document.getElementById("clicks");
var wechselkurse = [0.25, 0.18, 28.28, 0.17];
var momentaneWaehrung = 0;
var bild = document.getElementById("bild");

function onClick() {
    clicks2 = clicks2 + num;
    geld.value = clicks2;
    geldInt = clicks2;
}

function refresh() {
    geld.value = clicks2;
    geldInt = clicks2;
}

function doUp() {
    if (clicks2 >= i * 25000) {
        num = i * 2000;
        alert('Sie verdienen nun ' + num + ' Zloty pro click');
        clicks2 = clicks2 - i * 25000
        clicks.value = clicks2;
        i++;
        clicks = clicks2;
        verdienstproclick.innerHTML = num;
        kostenclick.innerHTML = i * 25000;
        geldInt = clicks2;
    }
    else {
        alert("Du musst f\u00fcr dieses Upgrade noch ein wenig sparen.");
    }
}


var myVar;
function interval() {
    if (clicks2 >= n * 20000) {
        n++;
        clearInterval(myVar);
        myVar = setInterval(value, 1000);
        verdienst = n * 100
        alert('Sie verdienen nun ' + verdienst + ' ' + zloty + ' pro Sekunde.')
        clicks2 = clicks2 - n * 10000;
        clicks.value = clicks2;
        verdienstprosekunde.innerHTML = verdienst;
        kostensec.innerHTML = (n * 20000);
        geldInt = clicks2;
    }
    else {
        alert("Du musst f\u00fcr dieses Upgrade noch ein wenig sparen.");
    }
}

function value() {
    clicks2 = clicks2 + verdienst;
    document.getElementById("clicks").value = clicks2;
    geldInt = clicks2;
}

function dollarfreischalten() {
    if (clicks2 >= 100000) {
        document.getElementById("dollar").style.visibility = "visible";
        clicks2 = clicks2 - 100000;
        document.getElementById("upgradeDollar").style.visibility = "hidden";
        geld.value = clicks2
    }
    else {
        alert("Du musst f\u00fcr dieses Upgrade noch ein wenig sparen.");
    }
}

function pfundfreischalten() {
    if (clicks2 >= 1000000) {
        document.getElementById("pfund").style.visibility = "visible";
        clicks2 = clicks2 - 1000000;
        document.getElementById("upgradePfund").style.visibility = "hidden";
        geld.value = clicks2
    }
    else {
        alert("Du musst f\u00fcr dieses Upgrade noch ein wenig sparen.");
    }
}

function yenfreischalten() {
    if (clicks2 >= 100000) {
        document.getElementById("yen").style.visibility = "visible";
        clicks2 = clicks2 - 100000;
        document.getElementById("upgradeYen").style.visibility = "hidden";
        geld.value = clicks2
    }
    else {
        alert("Du musst f\u00fcr dieses Upgrade noch ein wenig sparen.");
    }
}

function eurofreischalten() {
    if (clicks2 >= 100000) {
        clicks2 = clicks2 - 100000;
        document.getElementById("euro").style.visibility = "visible";
        document.getElementById("upgradeEuro").style.visibility = "hidden";
        geld.value = clicks2

    }
    else {
        alert("Du musst f\u00fcr dieses Upgrade noch ein wenig sparen.");
    }
}


function umrechnen(waehrung) {
    var temp = clicks2;
    switch (momentaneWaehrung) {

        case 0:
            //nichts tun
            break;
        case 1:
            temp = parseInt(clicks2 / wechselkurse[0]);
            break;
        case 2:
            temp = parseInt(clicks2 / wechselkurse[1]);
            break;
        case 3:
            temp = parseInt(clicks2 / wechselkurse[2]);
            break;
        case 4:
            temp = parseInt(clicks2 / wechselkurse[3]);
            break;
    }
    switch (waehrung) {
        case 0:
            momentaneWaehrung = 0;
            bild.src = "zlotti.jpg";
                    
            break;
        case 1:
            temp = parseInt(temp * wechselkurse[0]);
            momentaneWaehrung = 1;
            bild.src = "dollar.jpg";
            document.getElementById("währung").innerHTML = "Dollar";
            break;

        case 2:
            temp = parseInt(temp * wechselkurse[1]);
            momentaneWaehrung = 2;
            bild.src = "euro.jpg";
            document.getElementById("währung").innerHTML = "Euro";
            break;

        case 3:
            temp = parseInt(temp * wechselkurse[2]);
            momentaneWaehrung = 3;
            bild.src = "yen.jpg";
            document.getElementById("währung").innerHTML = "Yen";
            break;

        case 4:
            temp = parseInt(temp * wechselkurse[3]);
            momentaneWaehrung = 4;
            bild.src = "pfund.png";
            document.getElementById("währung").innerHTML = "Pfund";
            break;
    }
    clicks2 = temp;
    refresh();
}




