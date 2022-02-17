// اول خطوة نجيب تاريخ اليوم
// الان راح نستخدم دالة getTime 
// هذي الدالة راح تجيب لنا الوقت بالملي سكندز 
// ايش يعني ملي سكندز؟
// 1000 ملي سكندز تساوي ثانية واحده

// let todayDate = new Date();

// الحين راح نحط التاريخ الي نبغى نعد من عنده ونعرف كم ثانية باقي للوصول له
//اول يوم رمضان يبدا بتاريخ 1 ابريل لذلك بنمرره لهذه الدالة ونشوف المخرج

let countToDate = new Date('April 1, 2022 23:59:59').getTime();
console.log(countToDate)

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
    console.log(different, weeks, days, hours, minutes, seconds)

    if (different < 0){
        clearInterval()
        
    }
}

setInterval(ramadanCountDown, 1000)


// function callEverySecond(){
//     console.log('hello world')
// }

// setInterval(callEverySecond, 1000);

// الحين صارو عندنا الثواني كاملة بس نحتاج نقسمهام على شكل شهور وايام وساعات ودقايق