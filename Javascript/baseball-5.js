//https://www.codewars.com/kata/5388ff350b24c5e33000114c

class ScoreCard {
	constructor() {
		this.TeamOut = [1, 0] // first is which team batting? 1 is away, 0 is home, last is no. of outs
		this.Scores = [0, 0] //1 is away, 0 is home
		this.Batters = 0
		this.Batter = [0,0,0,0]//batters score
	}

	addEntry(string) {

	  if(string == "single") {

	  	for(var i = 0; i <= this.Batters; i++){
	  		if(this.Batter[i] < 3){ this.Batter[i]++; }
	  		else if(this.Batter[i] == 3){
	  			this.Batter[i] = 0; this.Scores[this.TeamOut[0]]++; this.Batters--;
	  			if(i == 0){ this.Batter[i] = 1; }
	  		}
	  	}
		this.Batters++
	  }

	  if(string == "double") {

	  	for(var i = 0; i <= this.Batters; i++){
	  		if(this.Batter[i] < 2){ this.Batter[i]+=2; }
			else if(this.Batter[i] >= 2){
	  			this.Batter[i] = 0; this.Scores[this.TeamOut[0]]++; this.Batters--;
	  			if(i == 0){ this.Batter[i] = 2; }
	  		}
	  	}
		this.Batters++
	  }

	  if(string == "triple") {

	  	for(var i = 0; i <= this.Batters; i++){
	  		if(this.Batter[i] < 1){ this.Batter[i]+=3; }
	  		else if(this.Batter[i] >= 1){
	  			this.Batter[i] = 0; this.Scores[this.TeamOut[0]]++; this.Batters--;
	  			if(i == 0){ this.Batter[i] = 3; }
	  		}
	  	}
		this.Batters++
	  }


	  if(string == "out") {
		this.TeamOut[1]++ //batter is out
		if (this.TeamOut[1] == 3){
		  this.Batter[0] = 0; this.Batter[1] = 0; this.Batter[2] = 0; this.Batter[3] = 0; this.Batters = 0; this.TeamOut[1] = 0;
		  if (this.TeamOut[0] == 1) { this.TeamOut[0] = 0; } else { this.TeamOut[0] = 1; }
		}
	  }

	  if(string == "homerun") {
		this.Scores[this.TeamOut[0]]++;
		for(var i = 0; i <= this.Batters; i++){
			while(this.Batters != 0){
				this.Batter[i] = 0; this.Scores[this.TeamOut[0]]++; this.Batters--;
			}
		}
	  }

	}
	getScore() {
		return "Home: " + this.Scores[0] + " Away: " + this.Scores[1]
	}
}
