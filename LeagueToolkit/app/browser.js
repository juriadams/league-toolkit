//
// Copyright (c) 2018 by 4dams. All Rights Reserved.
//
var currentVersion = "0.4.1";
var gameVersion;
var repository = "https://github.com/4dams/LeagueToolkit";

const electron = require('electron')
const {
	ipcRenderer
} = electron

var isActive

var level;
var icon;
var summoner;
var selectedTier = "UNRANKED"
var selectedDivision = "V"
var selectedLevel

function tierChange() {
	tier = document.getElementById("tier").value
	selectedTier = tier
}

function divisionChange() {
	division = document.getElementById("division").value
	selectedDivision = division
}

function submitTierDivison() {

	if (selectedTier == "GOTCHA") {
		selectedDivision = "";
	} else {
		division = document.getElementById("division").value;
		selectedDivision = division;
	}

	ipcRenderer.send('submitTierDivison', selectedTier, selectedDivision);
}

function submitLeagueName() {
	leagueName = document.getElementById("leagueName").value;
	ipcRenderer.send('submitLeagueName', leagueName);
}

let submitedLevel;

function submitLevel() {
	level = document.getElementById("level").value;
	ipcRenderer.send('submitLevel', level);
	document.getElementById("profileLevel").innerHTML = level;
}



var bold_italics = {
	a: '\u{1d622}',
	b: '\u{1d623}',
	c: '\u{1d624}',
	d: '\u{1d625}',
	e: '\u{1d626}',
	f: '\u{1d627}',
	g: '\u{1d628}',
	h: '\u{1d629}',
	i: '\u{1d62a}',
	j: '\u{1d62b}',
	k: '\u{1d62c}',
	l: '\u{1d62d}',
	m: '\u{1d62e}',
	n: '\u{1d62f}',
	o: '\u{1d630}',
	p: '\u{1d631}',
	q: '\u{1d632}',
	r: '\u{1d633}',
	s: '\u{1d634}',
	t: '\u{1d635}',
	u: '\u{1d636}',
	v: '\u{1d637}',
	w: '\u{1d638}',
	x: '\u{1d639}',
	y: '\u{1d63a}',
	z: '\u{1d63b}',
	A: '\u{1d608}',
	B: '\u{1d609}',
	C: '\u{1d60a}',
	D: '\u{1d60b}',
	E: '\u{1d60c}',
	F: '\u{1d60d}',
	G: '\u{1d60e}',
	H: '\u{1d60f}',
	I: '\u{1d610}',
	J: '\u{1d611}',
	K: '\u{1d612}',
	L: '\u{1d613}',
	M: '\u{1d614}',
	N: '\u{1d615}',
	O: '\u{1d616}',
	P: '\u{1d617}',
	Q: '\u{1d618}',
	R: '\u{1d619}',
	S: '\u{1d61a}',
	T: '\u{1d61b}',
	U: '\u{1d61c}',
	V: '\u{1d61d}',
	W: '\u{1d61e}',
	X: '\u{1d61f}',
	Y: '\u{1d620}',
	Z: '\u{1d621}'
}

var italics = {
	a: '\u{1d622}',
	b: '\u{1d623}',
	c: '\u{1d624}',
	d: '\u{1d625}',
	e: '\u{1d626}',
	f: '\u{1d627}',
	g: '\u{1d628}',
	h: '\u{1d629}',
	i: '\u{1d62a}',
	j: '\u{1d62b}',
	k: '\u{1d62c}',
	l: '\u{1d62d}',
	m: '\u{1d62e}',
	n: '\u{1d62f}',
	o: '\u{1d630}',
	p: '\u{1d631}',
	q: '\u{1d632}',
	r: '\u{1d633}',
	s: '\u{1d634}',
	t: '\u{1d635}',
	u: '\u{1d636}',
	v: '\u{1d637}',
	w: '\u{1d638}',
	x: '\u{1d639}',
	y: '\u{1d63a}',
	z: '\u{1d63b}',
	A: '\u{1d608}',
	B: '\u{1d609}',
	C: '\u{1d60a}',
	D: '\u{1d60b}',
	E: '\u{1d60c}',
	F: '\u{1d60d}',
	G: '\u{1d60e}',
	H: '\u{1d60f}',
	I: '\u{1d610}',
	J: '\u{1d611}',
	K: '\u{1d612}',
	L: '\u{1d613}',
	M: '\u{1d614}',
	N: '\u{1d615}',
	O: '\u{1d616}',
	P: '\u{1d617}',
	Q: '\u{1d618}',
	R: '\u{1d619}',
	S: '\u{1d61a}',
	T: '\u{1d61b}',
	U: '\u{1d61c}',
	V: '\u{1d61d}',
	W: '\u{1d61e}',
	X: '\u{1d61f}',
	Y: '\u{1d620}',
	Z: '\u{1d621}'
}

var bold = {
	a: '\u{1d5ee}',
	b: '\u{1d5ef}',
	c: '\u{1d5f0}',
	d: '\u{1d5f1}',
	e: '\u{1d5f2}',
	f: '\u{1d5f3}',
	g: '\u{1d5f4}',
	h: '\u{1d5f5}',
	i: '\u{1d5f6}',
	j: '\u{1d5f7}',
	k: '\u{1d5f8}',
	l: '\u{1d5f9}',
	m: '\u{1d5fa}',
	n: '\u{1d5fb}',
	o: '\u{1d5fc}',
	p: '\u{1d5fd}',
	q: '\u{1d5fe}',
	r: '\u{1d5ff}',
	s: '\u{1d600}',
	t: '\u{1d601}',
	u: '\u{1d602}',
	v: '\u{1d603}',
	w: '\u{1d604}',
	x: '\u{1d605}',
	y: '\u{1d606}',
	z: '\u{1d607}',
	A: '\u{1d5d4}',
	B: '\u{1d5d5}',
	C: '\u{1d5d6}',
	D: '\u{1d5d7}',
	E: '\u{1d5d8}',
	F: '\u{1d5d9}',
	G: '\u{1d5da}',
	H: '\u{1d5db}',
	I: '\u{1d5dc}',
	J: '\u{1d5dd}',
	K: '\u{1d5de}',
	L: '\u{1d5df}',
	M: '\u{1d5e0}',
	N: '\u{1d5e1}',
	O: '\u{1d5e2}',
	P: '\u{1d5e3}',
	Q: '\u{1d5e4}',
	R: '\u{1d5e5}',
	S: '\u{1d5e6}',
	T: '\u{1d5e7}',
	U: '\u{1d5e8}',
	V: '\u{1d5e9}',
	W: '\u{1d5ea}',
	X: '\u{1d5eb}',
	Y: '\u{1d5ec}',
	Z: '\u{1d5ed}'
}
function submitStatus() {
	status = document.getElementById("status").value;
	let length = status.length;
	let result = new Array(length);
	let status_converted;

	if (document.getElementById("italics").checked && document.getElementById("bold").checked) {

		// 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍

		for (let i = 0; i < length; i++) {
			let c = status.charAt(i)
			let r = bold_italics[c]

			result[i] = r != undefined ? r : c
		}

		status_converted = result.join('')

	} else if (document.getElementById("italics").checked) {

		// 𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧 𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍

		for (let i = 0; i < length; i++) {
			let c = status.charAt(i)
			let r = italics[c]

			result[i] = r != undefined ? r : c
		}

		status_converted = result.join('')

	} else if (document.getElementById("bold").checked) {

		// 𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇 𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭

		for (let i = 0; i < length; i++) {
			let c = status.charAt(i)
			let r = bold[c]

			result[i] = r != undefined ? r : c
		}

		status_converted = result.join('')

	} else {

		status_converted = status

	}


	ipcRenderer.send('submitStatus', status_converted)
}

function submitAvailability() {
	availability = document.getElementById("availability").value
	ipcRenderer.send('submitAvailability', availability)
}

function submitSummoner() {
	summoner = document.getElementById("summoner").value;
	ipcRenderer.send('submitSummoner', summoner);
	document.getElementById("profileName").innerHTML = summoner;
}

function submitLobby() {
	queueId = document.getElementById("queueId").value
	lobbyMembers = document.getElementById("lobbyMembers").value.split(" ")

	if (lobbyMembers) {
		processedMembers = lobbyMembers
	} else {
		processedMembers = []
	}

	ipcRenderer.send('submitLobby', queueId, processedMembers)
}

function submitIcon() {
	icon = document.getElementById("icon").value;
	ipcRenderer.send('submitIcon', icon);
	document.getElementById("profileSummonerIcon").src = "http://ddragon.leagueoflegends.com/cdn/" + gameVersion + "/img/profileicon/" + (icon) + ".png";
}

function submitWinsLosses() {
	wins = document.getElementById("wins").value
	losses = document.getElementById("losses").value
	ipcRenderer.send('submitWinsLosses', wins, losses);
}

function eventReset() {
	ipcRenderer.send('reset');
}

function exit_app() {
	ipcRenderer.send('exit_app');
}

function minimize_app() {
	ipcRenderer.send('minimize_app');
}

let clientIcon;
async function profileUpdate() {
	let data;

	try {
		data = ipcRenderer.sendSync("profileUpdate");
		if (!data) return;

		if (clientIcon) {
			if (clientIcon !== data.iconID) {
				document.getElementById("profileSummonerIcon").src = "http://ddragon.leagueoflegends.com/cdn/" + gameVersion + "/img/profileicon/" + data.iconID + ".png";
				clientIcon = data.iconID;
			}
		} else {
			clientIcon = data.iconID;
			let rankedTier = data.rankedTier || document.getElementById("profileRankedTier").innerHTML || "Not logged in.";
			let leagueName = data.leagueName || document.getElementById("profileLeagueName").innerHTML || "";
			let profileLevel = (data.level) || document.getElementById("profileWL").innerHTML || "";

			document.getElementById("profileName").innerHTML = summoner || data.name;
			document.getElementById("profileRankedTier").innerHTML = rankedTier != "undefined" ? rankedTier : "Unranked";
			document.getElementById("profileLeagueName").innerHTML = leagueName != "undefined" ? leagueName : "Unranked";
			document.getElementById("profileLevel").innerHTML = level || profileLevel;
			document.getElementById("profileSummonerIcon").src = "http://ddragon.leagueoflegends.com/cdn/" + gameVersion + "/img/profileicon/" + (icon || data.iconID || "1") + ".png";
		}
		

	} catch (e) {
		console.log("And error occured updating the profile information: " + e);
	}
}

/*
    SECTIONS
*/

function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks

	if (tabName == "Home") {
		document.getElementById("selected").style.marginLeft = "0px"
	}

	if (tabName == "Profile") {
		document.getElementById("selected").style.marginLeft = "120px"
	}

	if (tabName == "Champ Select") {
		document.getElementById("selected").style.marginLeft = "278px"
	}

	if (tabName == "Miscellaneous") {
		document.getElementById("selected").style.marginLeft = "473px"
	}

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent")
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none"
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks")
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "")
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block"
	evt.currentTarget.className += " active"
}


// Event listeners

function autoUpdate() {
	isActive = true
	setTimeout(function() {
		setInterval(function() {
			if (!isActive) return
			profileUpdate()
		}, 5000)
		profileUpdate();
	}, 2000)
}

window.addEventListener("load", autoUpdate, false)


window.onfocus = function() {
	isActive = true
}

window.onblur = function() {
	isActive = false
}

function toggleAutoAccept(element) {
	if (element.checked) {
		ipcRenderer.send('autoAccept', true)
	} else {
		ipcRenderer.send('autoAccept', false)
	}
}

function toggleInvDecline(element) {
	if (element.checked) {
		ipcRenderer.send('invDecline', true)
	} else {
		ipcRenderer.send('invDecline', false)
	}
}

ipcRenderer.send('requestVersionCheck')
setInterval(function() {
	ipcRenderer.send('requestVersionCheck')
}, 30000)


function openGithub() {
	ipcRenderer.send('openGitRepository');
}

ipcRenderer.on('versions', (event, appVersion, leagueGameVersion) => {
	gameVersion = leagueGameVersion;
	let versionElement = document.getElementById("version-tag");

	if (appVersion == currentVersion) {
		versionElement.innerHTML = "V" + currentVersion + " (latest)";
	} else if (appVersion > currentVersion) {
		versionElement.innerHTML = "V" + currentVersion + " (update available)";
	} else if (appVersion < currentVersion) {
		versionElement.innerHTML = "V" + currentVersion + " (beta)";
	}
})

function saveIgnored() {
	let ignored = document.getElementById("ignored").value
	let names = ignored.split(", ")
	ipcRenderer.send('saveIgnored', names)
}

setInterval(function() {
	if (level) {
		ipcRenderer.send('submitLevel', level);
	}
}, 20000)
