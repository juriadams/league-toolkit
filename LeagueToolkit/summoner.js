class summoner {

	constructor(data, APIRoutes) {
		// Modules
		this.request = require("request");

		// class data

		if (!this.IsJsonString(data)) return;
		data = JSON.parse(data)
		this.APIRoutes = APIRoutes;
		this.level = this.level || data.summonerLevel;
		this.name = this.name || data.displayName;
		this.ID = this.ID || data.summonerId;
		this.iconID = this.iconID || data.profileIconId;
		this.getRankedStats();
	}

	receivedRankedStats(data) {
		let rankedData = data.rankedData[0]; // 5 vs 5 solo-duo
		this.division = rankedData.division;
		this.wins = rankedData.wins;
		this.rankedTier = rankedData.rankedTier;
		this.leagueName = rankedData.leagueName;
		this.rankerQueue = rankedData.rankedQueue;
		this.lp = rankedData.lp;
	}

	IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

	getProfileData() {
		let arr = {
			name: this.name,
			iconID: this.iconID,
			leagueName: this.leagueName,
			leagueWins: this.wins,
			rankedTier: this.rankedTier + " " + this.division
		}
		return arr
	}

	getRankedStats() {
		let rankedUrl = this.APIRoutes.Route("getRankedStats", this.ID);
		let body = {
			url: rankedUrl,
			"rejectUnauthorized": false,
			headers: {
				Authorization: this.APIRoutes.getAuth()
			}
		};
		let callback = (error, response, body) => {
			if (!response) return;
			if (response.statusCode == 200) {
				body = JSON.parse(body);
				this.receivedRankedStats(body);
			}
		}
		this.request.get(body, callback);
	}

	returnRomanDivision(division) {
		division.toString();
		if (division == "1") return "I";
		if (division == "2") return "II";
		if (division == "3") return "III";
		if (division == "4") return "IV";
		if (division == "5") return "V";
		return "";
	}

	reset() {
		console.log("Starting reset.")
		let url = this.APIRoutes.Route("reset");
		let body = {
			url: url,
			"rejectUnauthorized": false,
			headers: {
				Authorization: this.APIRoutes.getAuth()
			},
			json: {
				"availability": "chat",
				"icon": this.iconID,
				"id": this.ID,
				"lastSeenOnlineTimestamp": (new Date().getTime()).toString(),
				"lol": {
					"level": this.level.toString(),
					"mapId": "",
					"rankedLeagueDivision": this.returnRomanDivision(this.division),
					"rankedLeagueName": this.leagueName,
					"rankedLeagueQueue": this.rankerQueue,
					"rankedLeagueTier": this.rankedTier,
					"rankedLosses": "0",
					"rankedWins": this.wins.toString()
				},
				"name": this.name
				// "statusMessage": "Most dedicated support player EUW!"
			}
		}
		let callback = function(error, response, body) {
			console.log('error:', error);
			console.log('statusCode:', response && response.statusCode);
			console.log('body:', body);
		};
		this.request.put(body, callback);
	}

}

module.exports = summoner;
