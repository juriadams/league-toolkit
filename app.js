//
// Copyright (c) 2018 by 4dams. All Rights Reserved.
//
var electron = require('electron');
var url = require('url');
var path = require('path');
var request = require('request');
var LCUConnector = require('lcu-connector');
var connector = new LCUConnector();

var APIClient = require("./APIRoutes");
var Summoner = require("./Summoner");
var LocalSummoner;
var APIRoutes;


// Extracting some stuff from electron
const {
	app,
	BrowserWindow,
	Menu,
	ipcMain
} = electron;


// Defining some variables
let mainWindow;
let addWindow;
var userAuth; // NOT THE ACCOUNT USERNAME.
var passwordAuth; // NOT THE ACCOUNT PASSWORD.
var requestUrl;

function getLocalSummoner() {
	let url = APIRoutes.Route("localSummoner");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		}
	};
	let callback = function(error, response, body) {
		//console.log('error:', error);
		//console.log('statusCode:', response && response.statusCode);
		//console.log('body:', body);
		LocalSummoner = new Summoner(body, APIRoutes);
	};

	request.get(body, callback);
}

connector.on('connect', (data) => {
	requestUrl = data.protocol + '://' + data.address + ':' + data.port;
	APIRoutes = new APIClient(requestUrl, data.username, data.password);

	getLocalSummoner();

	userAuth = data.username;
	passwordAuth = data.password;

	console.log('Request base url set to: ' + APIRoutes.getAPIBase());
});

// Listen for the app to be ready
app.on('ready', function() {

	// Creating main window of the app
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 720,
		frame: false,
		resizable: false,
		movable: true,
		radii: [5,5,5,5],
		icon: path.join(__dirname, 'assets/icon.png')
	});

	// Load HTML file into the window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, './app/index.html'),
		protocol: 'file:',
		slashes: true
	}));

});

app.on('window-all-closed', () => {
  app.quit()
});

ipcMain.on('reset', function() {
	LocalSummoner.reset();
});

ipcMain.on('exit_app', function(){
  app.quit();
});

ipcMain.on('minimize_app', function(){
  mainWindow.minimize();
});

ipcMain.on('submitTierDivison', (event, tier, division) => {
	console.log(tier);
	console.log(division);

	let url = APIRoutes.Route("submitTierDivison");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"lol": {
				"rankedLeagueTier": tier,
				"rankedLeagueDivision": division
			}
		}
	};
	let callback = function(error, response, body) {
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitLevel', (event, level) => {

	let url = APIRoutes.Route("submitLevel");
	let desiredLevel = level.toString();
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"lol": {
				"level": desiredLevel
			}
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitStatus', (event, status) => {

	let url = APIRoutes.Route("submitStatus");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"statusMessage": status
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitLeagueName', (event, leagueName) => {

	let url = APIRoutes.Route("submitLeagueName");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"lol": {
				"rankedLeagueName": leagueName
			}
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitAvailability', (event, availability) => {

	let url = APIRoutes.Route("submitAvailability");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"availability": availability
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitIcon', (event, icon) => {

	let url = APIRoutes.Route("submitIcon");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"icon": icon
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitSummoner', (event, name) => {

	let url = APIRoutes.Route("submitSummoner");
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"name": name
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('submitWinsLosses', (event, wins, losses) => {

	let url = APIRoutes.Route("submitWinsLosses");
	let desiredWins = wins.toString();
	let desiredLosses = losses.toString();
	let body = {
		url: url,
		"rejectUnauthorized": false,
		headers: {
			Authorization: APIRoutes.getAuth()
		},
		json: {
			"lol": {
				"rankedWins": desiredWins,
				"rankedLosses": desiredLosses
			}
		}
	};
	let callback = function(error, response, body) {
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);
		// console.log('body:', body);
	};

	request.put(body, callback);

});

ipcMain.on('profileUpdate', (event, wins, losses) => {
	getLocalSummoner();
	event.returnValue = LocalSummoner.getProfileData();
});

var autoAccept = function() {

	//if (autoaccept) {

	setInterval(function() {

		let url = APIRoutes.Route("autoAccept");
		let body = {
			url: url,
			"rejectUnauthorized": false,
			headers: {
				Authorization: APIRoutes.getAuth()
			},
		};
		let callback = function(error, response, body) {
			if (!body) return;
			var data = JSON.parse(body);

			// console.log(data["state"]);
			// console.log(data["playerResponse"]);

			if (data["state"] === "InProgress") {

				console.log(data["state"] === "InProgress")

				if (data["playerResponse"] === "None") {

					console.log(data["playerResponse"] === "None")

					console.log('\n\nFOUND GAME\n\n')

					let acceptUrl = APIRoutes.Route("accept");
					let acceptBody = {
						url: acceptUrl,
						"rejectUnauthorized": false,
						headers: {
							Authorization: APIRoutes.getAuth()
						},
						json: {}
					}
					let acceptCallback = function(error, response, body) {
						console.log('error:', error);
						console.log('statusCode:', response && response.statusCode);
						console.log('body:', body);
					};

					request.post(acceptBody, acceptCallback);
				}
			}
		};

		request.get(body, callback);
	}, 1000);
}

autoAccept();

connector.start();
