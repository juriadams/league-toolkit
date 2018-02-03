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

function exit_app() {
  ipcRenderer.send('exit_app');
}

function minimize_app() {
  ipcRenderer.send('minimize_app');
}

async function profileUpdate() {
  let data;
  try {
    data = ipcRenderer.sendSync("profileUpdate");

    document.getElementById("profileName").innerHTML = data.name;
    document.getElementById("profileRankedTier").innerHTML = data.rankedTier;
    document.getElementById("profileLeagueName").innerHTML = data.leagueName;
    document.getElementById("profileLeagueName").innerHTML = data.leagueName;
    document.getElementById("profileWL").innerHTML = data.leagueWins + "W/?L";
    document.getElementById("profileSummonerIcon").src = "http://ddragon.leagueoflegends.com/cdn/8.1.1/img/profileicon/" + data.iconID + ".png";
    
  } catch(e) {
    console.log("Error: " + e);
  }
}
/*
    SECTIONS
*/

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    if (tabName == "Home") {
      document.getElementById("selected").style.marginLeft = "0px";
    }

    if (tabName == "Profile") {
      document.getElementById("selected").style.marginLeft = "118px";
    }

    if (tabName == "Champ Select") {
      document.getElementById("selected").style.marginLeft = "270px";
    }

    if (tabName == "Miscellaneous") {
      document.getElementById("selected").style.marginLeft = "458px";
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


// Event listeners

function attachEventListeners() {
  setTimeout(function() {
     profileUpdate(); // update profile data without having to press update button.
   }, 3000)
 

  let profileUpdateElement = document.getElementById("profileUpdate");
  profileUpdateElement.addEventListener("click", profileUpdate);
}
window.addEventListener("load", attachEventListeners, false);
