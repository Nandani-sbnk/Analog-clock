let hr= document.getElementById('hour');
let mi= document.getElementById('minute');
let se= document.getElementById('sec');

function displayTime(){
    let date =new Date();

    //getting  hour,mim,sec from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation =39*hh +mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    mi.style.transform=`rotate(${mRotation}deg)`;
    se.style.transform=`rotate(${sRotation}deg)`;
}


setInterval(displayTime,1000);