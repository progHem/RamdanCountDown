let countToDate = new Date('April 1, 2022 23:59:59').getTime();

function ramadanCountDown(){
    
    let todayDate = new Date().getTime();

    let different = countToDate - todayDate

    let months = Math.floor(different / (1000 * 60 * 60 * 24 * 7 * 4))
    let weeks = Math.floor((different % ( 1000 * 60 * 60 * 24 * 7 * 4)) / (1000 * 60 * 60 * 24 * 7))

    let days = Math.floor((different % ( 1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
    let hours = Math.floor((different % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((different % ( 1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((different % ( 1000 * 60)) / 1000)


    document.getElementById('months').innerHTML = months < 10? '0'+ months : months;
    document.getElementById('weeks').innerHTML = weeks < 10? '0'+ weeks : weeks;
    document.getElementById('days').innerHTML = days < 10? '0'+ days : days;
    document.getElementById('hours').innerHTML = hours < 10? '0'+ hours : hours;
    document.getElementById('minutes').innerHTML = minutes < 10? '0'+ minutes : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10? '0'+ seconds : seconds;


    if (different < 0){
        clearInterval()
        let div = document.createElement('div');
        div.innerHTML = `<h1>رمضان كريم</h1><h1>&hearts; كل عام و انتم بخير</h1>`
        div.classList.add('message')
        document.getElementById('banner').appendChild(div)
    }
}

setInterval(ramadanCountDown, 1000)