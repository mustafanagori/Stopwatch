var hMin  = document.getElementById('min_Heading');
var hSec  = document.getElementById('sec_Heading');
var hMiliSec  = document.getElementById('miliSec_Heading');

var min = 0;
var sec = 0;
var miliSec = 0;

var strBtn = document.getElementById('startBtn');
var intervalVar;

function timeout()
{
    miliSec++;
    hMiliSec.innerHTML = miliSec;
    if(miliSec >= 100)
    {
        sec++;
        hSec.innerHTML = sec;
        miliSec = 0 ;

    }
    else if(sec >= 60)
    { 
        min++;
        hMin.innerHTML = min;
        sec = 0;   
    }
    
}
function start() {
    intervalVar= setInterval(timeout,10);
    intervalVar;

    strBtn.className = 'disable';
   
}
function pause() {
    clearInterval(intervalVar);
    strBtn.className = "visible";
    
}
function reset() {
    min = 0;
    sec = 0;
    miliSec= 0;
   
    hMin.innerHTML = min;
    hMiliSec.innerHTML = miliSec;
    hSec.innerHTML = sec;
    pause();
    
}