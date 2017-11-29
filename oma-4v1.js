
function leftMenuOpen() {
    document.getElementsByClassName("leftMenuHandler")[0].style.display = "block";
}
function leftMenuClose() {
    document.getElementsByClassName("leftMenuHandler")[0].style.display = "none";
}

function rightMenuOpen() {
    document.getElementsByClassName("rightMenuHandler")[0].style.display = "block";
}
function rightMenuClose() {
    document.getElementsByClassName("rightMenuHandler")[0].style.display = "none";
}

/* -------------------------------------------------------------------------*/

function startTime() {
    //string d=DateTime.now().format('MM/dd/yyyy HH:mm:ss');
    
    var d=new Date();
    //console.log("date: " + d)
    var year = d.getUTCFullYear();
    var mo = d.getUTCMonth() + 1;
    var day = d.getUTCDate();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    mo = checkTime(mo);
    day = checkTime(day);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);   
    
    // document.getElementById('txt').innerHTML = d;    
    //document.getElementById('txt').innerHTML = "Todays date and time: " +h+":"+m+":"+s;
    document.getElementById('clock').innerHTML = year+"-"+mo+"-"+day+" at "+h+":"+m+":"+s;
    //console.log("clock: " + year+"-"+mo+"-"+day+" at "+h+":"+m+":"+s);

}

window.setInterval(function() {
    startTime();
}, 500);

function checkTime(i) {  // add zero in front of numbers < 10
    var j = i;
    if (i < 10) {
        j = "0" + i;
    }
    return j;
}


/* -------------------------------------------------------------------------*/

var timeoutID;
var audio = new Audio('Blackbird-song.mp3');

function startTimer() {
  inValue=document.getElementById("timer").value;
  console.log("startTimer / user given value: " + inValue);
  console.log("startTimer / user given value type: " + typeof(inValue));

  inValueSeconds = 1000 * (+(inValue));    // Typecasting from string to num with + sign before string inValue
  inValueMinutes = 60 * (+(inValueSeconds));    // Typecasting from string to num with + sign before string inValue
  console.log("timedCount / modified user given value: " + inValueMinutes);
  console.log("timedCount / modified user given value type: " + typeof(inValueMinutes));
  //timeoutID = window.setTimeout(endAlarm(timeoutID), inValue);
  timeoutID = window.setInterval(function() {
    endAlarm(timeoutID);
  }, inValueMinutes);
}

function clearAlert() {
  window.clearTimeout(timeoutID);
  audio.pause();
  audio.currentTime = 0;
}

function endAlarm(timeoutID) {
		
	 audio.play();
    alert("Timer counting ready, " + inValueMinutes + " minutes passed");
    window.clearTimeout(timeoutID);
}

// ======================================================================

function newWindow(){
 
   window.open("file:///home/osmo/HTML-OMA/omaPage-4-2.html", "_self");
} 
