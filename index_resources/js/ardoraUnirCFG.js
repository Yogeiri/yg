//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=10; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=80;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="\"¡Excelente trabajo! Has demostrado una gran capacidad de razonamiento lógico al emparejar correctamente cada situación con su consecuencia. ¡Sigue así!\""; messageTime="culmino el tiempo"; messageError="\"Algunas parejas no son correctas. Revisa bien la lógica entre cada situación y su consecuencia. ¡Inténtalo de nuevo!\""; messageErrorG="\"Algunas parejas no son correctas. Revisa bien la lógica entre cada situación y su consecuencia. ¡Inténtalo de nuevo!\""; messageAttempts="limite de tiempo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["TGxvdmnDsyB0b2RhIGxhIG5vY2hl", "TGFzIGNhbGxlcyBhbWFuZWNpZXJvbiBtb2phZGFz"],["Tm8gZGVzYXl1bsOz", "U2ludGnDsyBtYXJlbyBlbiBjbGFzZQ=="],["Q3J1esOzIGVsIHNlbcOhZm9ybyBlbiByb2pv", "UmVjaWJpw7MgdW5hIG11bHRh"],["U2UgZnVlIGxhIGVsZWN0cmljaWRhZA==", "Tm8gcHVkaW1vcyB2ZXIgdGVsZXZpc2nDs24="],["QXBhZ8OzIGxhIGNvbXB1dGFkb3JhIGNvcnJlY3RhbWVudGU=", "Tm8gcGVyZGnDsyBuaW5nw7puIGFyY2hpdm8="],["UHJhY3RpY8OzIGFqZWRyZXogdG9kb3MgbG9zIGTDrWFz", "TWVqb3LDsyBzdSBjYXBhY2lkYWQgbMOzZ2ljYQ=="],["T3JkZW7DsyBsYXMgcGllemFzIGRlbCByb21wZWNhYmV6YXM=", "TG9ncsOzIGNvbXBsZXRhcmxvIG3DoXMgcsOhcGlkbw=="],["RXN0dWRpw7MgbXVjaG8gcGFyYSBlbCBleGFtZW4=", "U2Fjw7MgdW5hIGJ1ZW5hIG5vdGE="]];
var c=[[20,30],[11,21],[25,17],[22,25],[34,24],[31,26],[34,28],[28,19]];
var con1=["Llovió toda la noche","Se fue la electricidad","Estudió mucho para el examen","No desayunó","Cruzó el semáforo en rojo","Apagó la computadora correctamente","Practicó ajedrez todos los días","Ordenó las piezas del rompecabezas"];
var con2=["Sacó una buena nota","No pudimos ver televisión","Sintió mareo en clase","Las calles amanecieron mojadas","No perdió ningún archivo","Mejoró su capacidad lógica","Recibió una multa","Logró completarlo más rápido"];
var sel1=""; join1=[]; join2=[];
