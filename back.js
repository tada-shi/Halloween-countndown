function countdown(){
    halloween = new Date('2021-10-31').getTime();
    current_date = new Date().getTime();
    diff = halloween - current_date;

    days = Math.floor(diff/(1000 * 60 * 60 * 24));
    hours = Math.floor((diff%(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff%(1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff%(1000 * 60)) / 1000);

    document.getElementById('days').innerText = `${days}d`;
    document.getElementById('hours').innerText = `${hours}h`;
    document.getElementById('minutes').innerText = `${minutes}m`;
    document.getElementById('seconds').innerText = `${seconds}s`;

    if (diff < 0){
        document.getElementById('timer').classList.add('remove');
        document.querySelector('.endPeriod h1').innerText = "HAPPY HALLOWEEN";
        clearInterval(count);
    }

    document.getElementById('sec').style.height = `${100 - seconds}vh`;
    document.getElementById('min').style.height = `${100 - minutes}vh`;
    document.getElementById('hr').style.height = `${500 - hours}px`;
    document.getElementById('dy').style.height = `${4*days}px`;
}
var count = setInterval(countdown, 1000);
