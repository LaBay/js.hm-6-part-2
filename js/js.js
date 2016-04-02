'use strict'

var timeStart;
var time = 0;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var split = document.getElementById('split');
var reset = document.getElementById('reset');
var startOn;
var scoreboard = document.getElementById('scoreboard');
var splitTime =0;

function goOn(){
	var timeProceed = new Date();
	var t = timeProceed - timeStart;
	time = t;
	var ms = t % 1000;
	t = (t/1000)>>0;
	var s = t % 60;
	t = (t/60) >> 0;
	var m = t % 60;
	t = (t/60) >> 0;
	var h = t % 24;
	scoreboard.innerHTML = '' + ((h/10)>>0) + (h%10) + ':' + ((m/10)>>0) + (m%10) + ':'
	+ ((s/10)>>0) + (s%10) + ':' + ((ms/100)>>0) + (((ms/10)%10)>>0) + (((ms)%10)>>0);
};

function startWasPressed(){
	startOn = setInterval(goOn, 17);
	timeStart = new Date();
	timeStart = +timeStart - time;
	stop.style.display='inline-block';
	start.style.display='none';
	document.getElementById("split").disabled = false;
};

function stopWasPressed(){
	clearInterval(startOn);
	stop.style.display='none';
	start.style.display='inline-block';
	document.getElementById("split").disabled = true;
};

function splitWasPressed(){
	if (time != 0){
	splitTime++;
	var t = time;
	var ms = t % 1000;
	t = (t/1000)>>0;
	var s = t % 60;
	t = (t/60) >> 0;
	var m = t % 60;
	t = (t/60) >> 0;
	var h = t % 24;
	var elementForScoreboard2 = document.getElementById('watch2');
	var scoreboard2 = document.createElement('p');
	scoreboard2.classList.add('splitValue');
	elementForScoreboard2.appendChild(scoreboard2);
	scoreboard2.innerHTML = '' + ((splitTime/10)>>0) + (splitTime%10) + ' Split: ' + ((h/10)>>0) + (h%10) + ':' + ((m/10)>>0) + (m%10) + ':'
	+ ((s/10)>>0) + (s%10) + ':' + ((ms/100)>>0) + (((ms/10)%10)>>0) + (((ms)%10)>>0);
	}
};

function resetWasPressed(){
	clearInterval(startOn);
	time = 0;
	scoreboard.innerHTML = '00:00:00:000';
	stop.style.display='none';
	start.style.display='inline-block';
	document.getElementById("split").disabled = true;
	splitTime = 0;
	var elementForScoreboard2 = document.getElementsByClassName('splitValue');
	while(elementForScoreboard2.length > 0){
        elementForScoreboard2[0].parentNode.removeChild(elementForScoreboard2[0]);
    };
};
	
start.addEventListener('click', startWasPressed);
stop.addEventListener('click', stopWasPressed);
split.addEventListener('click', splitWasPressed);
reset.addEventListener('click', resetWasPressed);