
// console.log(today);

// let day, month, hour, minute, second;

// day = today.getDay();
// console.log(day);

// month = today.getMonth();
// console.log(month);

// hour = today.getHours();
// console.log(hour);

// minute = today.getMinutes();
// console.log(minute);

// second = today.getSeconds();
// console.log(second);

// console.log(timestamp);



// console.log(futureTimeStamp);
const timer = document.getElementById('timer');
const start = document.getElementById('start-countdown');
const reset = document.getElementById('reset');
const inputDate = document.getElementById('inputDate');
const yearOutput = document.getElementById('year');
let today = new Date();
let song = new Audio('./audio/countdown.mp3');
let isCounting = false;





let difference;

start.addEventListener('click', () => {






    isCounting = true;
    let inputValue = inputDate.value;

    const interval = setInterval(() => {

        today = new Date();

        let futureTime = new Date(inputValue);

        let futureTimeStamp = futureTime.getTime();

        let timestamp = today.getTime();


        difference = futureTimeStamp - timestamp;

        if (difference < 0 || !inputValue) {

            timer.innerHTML = `<div class="alert alert-danger" role="alert">
            Impossible to countdown a past date!</div>`
            start.disabled = false;
        } else {

            song.play();


            // CONVERSION MS TO DAYS HRS MINS 

            const oneDay = 24 * 60 * 60 * 1000;
            const oneHour = 60 * 60 * 1000;
            const oneMinute = 60 * 1000;

            let days = Math.floor(difference / oneDay);
            let hours = Math.floor((difference % oneDay) / oneHour);
            let minutes = Math.floor((difference % oneHour) / oneMinute);
            let seconds = Math.floor((difference % oneMinute) / 1000);

            let timetemp = `

            <div class="card">
            <div class="card-body text-center">
            <h1>${days}</h1>
            <h4>Days</h4>
            </div>
            </div>
            
         <div class="card">
         <div class="card-body text-center">
         <h1>${hours}</h1>
            <h4>Hours</h4>
            </div>
            </div>
            
            <div class="card">
            <div class="card-body text-center">
            <h1>${minutes}</h1>
            <h4>Minutes</h4>
            </div>
            </div>
            
            <div class="card">
            <div class="card-body text-center">
            <h1>${seconds}</h1>
            <h4>Seconds</h4>
            </div>
            </div>`;

            timer.innerHTML = timetemp;
            // console.log(days);
            // console.log(hours);
            // console.log(minutes);
            // console.log(seconds);

            // console.log(difference);
        }
        if (difference < 100) {
            clearInterval(interval);
            song.pause();
        }
    }, 1000);


    reset.addEventListener('click', () => {

        clearInterval(interval);
        song.pause();
        inputValue = 'n/a';
        timer.innerHTML = 'Please select a date and hit start countdown';
        isCounting = false;
        start.disabled = false;


    })

    if (isCounting) {
        start.disabled = true;
    }
});



yearOutput.innerHTML = today.getFullYear();












