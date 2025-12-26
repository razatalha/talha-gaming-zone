let pc=0,games=0,players=0;
let a=setInterval(()=>{pc++;document.getElementById("pc").innerText=pc;if(pc==50)clearInterval(a)},30);
let b=setInterval(()=>{games++;document.getElementById("gamesCount").innerText=games;if(games==100)clearInterval(b)},20);
let c=setInterval(()=>{players++;document.getElementById("players").innerText=players;if(players==2000)clearInterval(c)},5);
