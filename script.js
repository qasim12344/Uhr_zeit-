let st = document.getElementById('stunde');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayZeit(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hDrehung = 30*hh + mm/2;
    let mDrehung = 6*mm;
    let sDrehung = 6*ss;

    st.style.transform = `rotate(${hDrehung}deg)`;
    min.style.transform = `rotate(${mDrehung}deg)`;
    sec.style.transform = `rotate(${sDrehung}deg)`;

}

setInterval(displayZeit, 1000);