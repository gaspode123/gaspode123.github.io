//Variablen
var datenbank = [
    ["Peter", "Jon", "Claudia"],
    ["1234", "JonJon", "qwertz"]
]; //namen, passwörter
var text = [
    ["Falsches Passwort oder Benutzername",
        "Ausgeloggt",
        "Anmelden",
        "Benutzername",
        "Passwort",
        "Registrieren",
        "Weitere Optionen",
        "Sprache ändern",
        "Event erstellen",
        "Profil",
        "Abmelden", //10
        "Erstellen",
        "Name des Events",
        "Ort",
        "Zeit",
        "Veranstalter",
        "Beschreibung",
        "E-Mail",
        "Startseite",
        "Events erstellen",
        "Registrierung",
        "Sprachen einstellen"],
    ["Wrong username or password",
        "Logged out",
        "Log in",
        "Username",
        "Password",
        "register",
        "More options",
        "Change Language",
        "Add event",
        "Profile",
        "Log out",
        "Add",
        "Name of the Event",
        "Location",
        "Time",
        "organizer",
        "Description",
        "E-Mail",
        "Home",
        "Add events",
        "Registration",
        "Change language"],
    ["اسم المستخدم أو كلمة المرور غير صحيحة",
        "تسجيل الدخول",
        "تسجيل",
        "اسم المستخدم",
        "كلمة المرور",
        "تسجيل",
        "المزيد من الخيارات",
        "تغيير اللغة",
        "إنشاء الحدث",
        "البيانات الشخصية",
        "تسجيل الخروج",
        "وضع",
        "اسم الحدث",
        "مكان",
        "وقت",
        "منظم",
        "وصف",
        "البريد الالكتروني",
        "منزل",
        "إنشاء أحداث",
        "تسجيل",
        "وضع اللغات"]];
var lang; //0 = Deutsch; 1 = Englisch; 2 = Arabisch
var username = document.getElementById("username"); //eingegebener Name
var password = document.getElementById("password"); //eingegebenes PW
var userId = "null"; //eingeloggter Benutzer
var language;
//Funktionen
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLP-5MsGjTMjYQ7WOdhm9BmgK9xHSfXfc",
    authDomain: "intekidz.firebaseapp.com",
    databaseURL: "https://intekidz.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);

function changeLang(pLang) { //Sprache wechseln
    lang = pLang;
    var user = firebase.auth().currentUser;
    //console.log(user);
    firebase.database().ref('languages/' + user.uid).set(lang);
    this.updateLang(5);
    }
function updateLang(pSite)
{
    var user = firebase.auth().currentUser;
    firebase.database().ref('languages/' + user.uid).once('value').then(function (snapshot) {
        lang = snapshot.val();
        //updateEvents(snapshot.val());
    });
	switch(pSite)
	{
		case 1: alert("test");
			    document.getElementById("login").innerText = text[1][2];
				document.getElementById("usr").innerText = text[lang][3];
				document.getElementById("pwd").innerText = text[lang][4];
				document.getElementById("register").innerText = text[lang][5];
				break;
		case 2: document.getElementById("registrierung").innerText = text[lang][19];
				document.getElementById("registrieren").value = text[lang][5];
				document.getElementById("mail").innerText = text[lang][17];
				document.getElementById("passwort").innerText = text[lang][4];
				document.getElementById("changeLang").innerHTML = text[lang][7];
			    document.getElementById("addEvent").innerHTML = text[lang][8];
			    document.getElementById("profile").innerHTML = text[lang][9];
			    document.getElementById("logout").innerHTML = text[lang][10];
				break;
		case 3: document.getElementById("success").value = text[lang][11]
				document.getElementById("eventLabel").innerText = text[lang][12];
				document.getElementById("ortLabel").innerText = text[lang][13];
				document.getElementById("timeLabel").innerText = text[lang][14];
				document.getElementById("veranstalterLabel").innerText = text[lang][15];
				document.getElementById("descriptionLabel").innerText = text[lang][16];
				document.getElementById("changeLang").innerHTML = text[lang][7];
			    document.getElementById("profile").innerHTML = text[lang][9];
			    document.getElementById("logout").innerHTML = text[lang][10];
			    document.getElementById("eventTitle").innerText = text[lang][19];
			    document.getElementById("start").innerText = text[lang][18];
				break;
		case 4: document.getElementById("language").innerHTML = text[lang][7];
	    		document.getElementById("addEvent").innerHTML = text[lang][8];
	    		document.getElementById("profile").innerHTML = text[lang][9];
	    		document.getElementById("logout").innerHTML = text[lang][10];
	    		document.getElementById("start").innerText = text[lang][18];
	    		break;
		case 5: document.getElementById("addEvent").innerHTML = text[lang][8];
	    		document.getElementById("profile").innerHTML = text[lang][9];	
	    		document.getElementById("logout").innerHTML = text[lang][10];	
	    		document.getElementById("start").innerHTML = text[lang][18];
	    		break;
	}
}

var i;


function intekidzlogin() {

    firebase.auth().signInWithEmailAndPassword(username.value, password.value)
    .then(
      function (result) {
        document.location.href = "index.html";
      },
      function(error){
        alert("error");
        console.log(error.message);
      });
}

function intekidzregister() {
	var usernameReg = document.getElementById("usrRegister");
	var passwordReg = document.getElementById("pswRegister");
    firebase.auth().createUserWithEmailAndPassword(usernameReg.value, passwordReg.value)
    .then(
      function (result) {
    	alert("success");
        document.location.href = "login.html";
      },
      function(error){
        alert("error");
        console.log(error.message);
      });
}

function intekidzlogout() {
    document.location.href = "login.html";
}



function Event(name, ort, zeit, veranstalter, beschreibung) {
    if (nameEvent !== null && ort !== null && zeit !== null && veranstalter !== null && beschreibung !== null) {
        this.name = name;
        this.ort = ort;
        this.zeit = zeit;
        this.veranstalter = veranstalter;
        this.beschreibung = beschreibung;
        alert("Event wurde erstellt");
    }
    else {
        alert("Ungueltige Eingabe");
    }
}

function newEvent() {
    
    var event = {
        name:  document.getElementById("name").value,
        ort:  document.getElementById("ort").value,
        zeit:  document.getElementById("zeit").value,
        veranstalter: document.getElementById("veranstalter").value,
        beschreibung : document.getElementById("beschreibung").value
    };
    console.log(event);

    var newEventy = firebase.database().ref().child('events').push().key;

    firebase.database().ref('events/' + newEventy).set(event);
  
}

function newProfil() {
    
    var profil = {
        name:  document.getElementById("personName").value,
        alter : document.getElementById("personAlter").value,
        ort:  document.getElementById("personOrt").value,
        herkunftsland:  document.getElementById("personHerkunftsland").value,
        sprachen: document.getElementById("personSprachen").value,
        hobbies : document.getElementById("personHobbies").value,
        nummer : document.getElementById("personNummer").value,
        status : document.getElementById("personStatus").value
    };
    console.log(profil);

    var newProfily = firebase.database().ref().child('profils').push().key;

    firebase.database().ref('profils/' + newProfily).set(profil);
  
}


function listEvents() {
  /*  firebase.database().ref('events').on('value', function (snapshot) {
        console.log("test");
        updateEvents(postElement, snapshot.val());
    }); */
    firebase.database().ref('events').once('value').then( function (snapshot) {
        console.log("test");
        updateEvents(snapshot.val());
    });
}

function updateEvents(value) {
    console.log(value);
    Object.keys(value).forEach(function (key) {
        console.log(value[key]);
        var tr = document.createElement("tr");
        var tdName = document.createElement("td");
        tdName.appendChild(document.createTextNode(value[key].name));
        var tdOrt = document.createElement("td");
        tdOrt.appendChild(document.createTextNode(value[key].ort));
        var tdZeit = document.createElement("td");
        tdZeit.appendChild(document.createTextNode(value[key].zeit));
        tr.appendChild(tdName);
        tr.appendChild(tdOrt);
        tr.appendChild(tdZeit);
        document.getElementById("eventTable").appendChild(tr);
        tdName.setAttribute("data-toggle", "modal");
        tdName.addEventListener("click", function () { fillModalWithEvent(value[key]) }, false);
        tdName.setAttribute("data-target", "#exampleModal");
    });
}


    function fillModalWithEvent(event){
        document.getElementById("myModalLabel").innerHTML = event.name;
        console.log("click");
        //document.getElementById("myModal").modal("show");


    }





function loadIndex()
{
	this.listEvents;
	this.updateLang(4);
}