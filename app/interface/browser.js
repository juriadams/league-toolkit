//
// Copyright (c) 2018 by 4dams. All Rights Reserved.
//

const electron = require('electron');
const {ipcRenderer} = electron;

var selectedTier = "UNRANKED";
var selectedDivision = "V";
var selectedLevel;

function tierChange() {
  tier = document.getElementById("tier").value;
  selectedTier = tier;
  console.log('New tier selected: ' + tier);
}

function divisionChange() {
  division = document.getElementById("division").value;
  selectedDivision = division;
  console.log('New division selected: ' + division);
}

function submitTierDivison() {
  ipcRenderer.send('submitTierDivison', selectedTier, selectedDivision);
}

function submitLeagueName() {
  leagueName = document.getElementById("leagueName").value;
  ipcRenderer.send('submitLeagueName', leagueName);
}

function submitLevel() {
  level = document.getElementById("level").value;
  ipcRenderer.send('submitLevel', level);
}

function submitStatus() {
  status = document.getElementById("status").value;

  if (document.getElementById("underlined").checked) {
    var finalStatus = status + '‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾';
  } else {
    var finalStatus = status;
  }

  ipcRenderer.send('submitStatus', finalStatus);
}

function submitAvailability() {
  availability = document.getElementById("availability").value;
  ipcRenderer.send('submitAvailability', availability)
}

function submitSummoner() {
  summoner = document.getElementById("summoner").value;
  ipcRenderer.send('submitSummoner', summoner)
}

function submitIcon() {
  icon = document.getElementById("icon").value;
  ipcRenderer.send('submitIcon', icon)
}

function submitWinsLosses() {
  wins = document.getElementById("wins").value;
  losses = document.getElementById("losses").value;
  ipcRenderer.send('submitWinsLosses', wins, losses)
}

function eventReset() {
  ipcRenderer.send('reset');
}
