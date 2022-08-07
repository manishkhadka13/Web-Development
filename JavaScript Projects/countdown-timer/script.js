const daysel=document.getElementById('days');
const hoursel=document.getElementById('hours');
const minsel=document.getElementById('mins');
const secel=document.getElementById('sec');

const newYears="1 jan 2023";
function countdown()
{
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalseconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(totalseconds/3600/24);
    const hours=Math.floor(totalseconds/3600)%24;
    const mins=Math.floor(totalseconds/60)%60;
    const seconds=Math.floor(totalseconds)%60;
    
    daysel.innerHTML=days;
    hoursel.innerHTML=hours
    minsel.innerHTML=mins;
    secel.innerHTML=seconds;
}   
countdown();
setInterval(countdown,1000);