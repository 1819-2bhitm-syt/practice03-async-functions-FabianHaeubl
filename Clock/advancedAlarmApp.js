let seconds = 10;
let logTick = true;
let timer = setInterval(() => {
    if(logTick){
        console.log("tick");
    } else {
        console.log("tack");
    }
    logTick=!logTick;
},1000);
setTimeout(() =>{
    clearInterval(timer);
},seconds * 1000 + 100);

let gutenMorgen = function(){
    console.log("Guten Morgen");
}
let timer1=setInterval(gutenMorgen,seconds * 1000 + 100);
setTimeout(function(){
    clearInterval(timer1);
},seconds * 1000 + 100);