function start_game(){
	name = prompt("User name");
	
	sessionStorage.setItem("username", name);
	
	loadpage("./html/game.html");
}

function exit (){
	loadpage("../index.html");
}

function options(){
	loadpage("./html/options.html");
}


