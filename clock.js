let hr=document.getElementById('hr');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime(){
    let date= new Date()

    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();
    //rotae
    let hRo=30*hh +mm/2;
    let mRo=6*mm;
    let sRo=6*ss;
    hr.style.transform = `rotate(${hRo}deg)`;
    min.style.transform=`rotate(${mRo}deg)`;
    sec.style.transform=`rotate(${sRo}deg)`;
}
setInterval(displayTime,1000)