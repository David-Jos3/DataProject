// Editar o backgroud de acordo com o horario 
// Colocar uma Imagem representando cada turno do dia


const getDate = document.querySelector('#date');
const getHours = document.querySelector('#hour');
const areaImg = document.querySelector('.area-img');




function getDateYear() {
    const date = new Date()
    const year = date.getFullYear();
    const dayWeek = date.getDate();


    return getDate.innerHTML = `${getDay()}, ${dayWeek} de ${getMonth()} de ${year} `
}

getDateYear()

function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;

}


function getHour() {
    const date = new Date()
    const hour = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
    const seconds = zeroLeft(date.getSeconds());


    return getHours.innerHTML = `${hour}:${minutes}:${seconds}`;
}



function getDay(day) {
    const date = new Date();
    day = date.getDay();

    let dayOfTheWeek;

    switch (day) {
        case 0:
            dayOfTheWeek = 'Domingo'
            break;
        case 1:
            dayOfTheWeek = 'Segunda';
            break;
        case 2:
            dayOfTheWeek = 'Terça';
            break;
        case 3:
            dayOfTheWeek = 'Quarta';
            break;
        case 4:
            dayOfTheWeek = 'Quinta';
            break;
        case 5:
            dayOfTheWeek = 'Sexta';
            break;
        case 6:
            dayOfTheWeek = 'Sábado';
            break;
        default:
            dayOfTheWeek = '';
    }
    return dayOfTheWeek;

}



function getMonth(month) {
    const date = new Date();
    month = date.getMonth();

    let months;

    switch (month) {
        case 0:
            months = 'Janeiro'
            break;
        case 1:
            months = 'Fevereiro';
            break;
        case 2:
            months = 'Março';
            break;
        case 3:
            months = 'Abril';
            break;
        case 4:
            months = 'Maio';
            break;
        case 5:
            months = 'Junho';
            break;
        case 6:
            months = 'Julho';
            break;
        case 7:
            months = 'Agosto';
            break;
        case 8:
            months = 'Setembro';
            break;
        case 9:
            months = 'Outubro';
            break;
        case 10:
            months = 'Novembro';
            break;
        case 11:
            months = 'Dezembro';
            break;
        default:
            months = '';
    }
    return months;
}


function imgHours(hour) {
    const date = new Date();
    hour = date.getHours();

    if (hour >= 5 && hour <= 11) {
        areaImg.classList.add('area-img-afternoon');
        areaImg.classList.remove('area-img-night');

    } else if (hour >= 12 && hour < 18) {
        areaImg.classList.add('area-img-morning');
        areaImg.classList.remove('area-img-afternoon');

    } else if (hour >= 18 && hour <= 24) {
        areaImg.classList.add('area-img-night');
        areaImg.classList.remove('area-img-morning');


    } else if (hour >= 1 && hour < 5) {
        areaImg.classList.add('area-img-night');
    }


}

imgHours();

function backgroudHours(backgroud, backgroudHours, hour) {
    const date = new Date();
    hour = date.getHours();

    backgroud = document.querySelector('body');
    backgroudHours = document.querySelector('.area-time');

    if (hour >= 5 && hour <= 11) {
        backgroud.style.background = 'rgb(243 220 146)';
        backgroudHours.classList.add('area-time-afternoon');

    } else if (hour >= 12 && hour < 18) {
        backgroud.style.background = 'rgb(223 166 71)';
        backgroudHours.classList.add('area-time-morning')

    } else if (hour >= 18 && hour <= 24) {
        backgroud.style.background = ' rgb(20 20 19)';
        backgroudHours.classList.add('area-time-night')


    } else if (hour >= 1 && hour < 5) {
        backgroud.style.background = 'rgb(20 20 19)';
        backgroudHours.classList.add('area-time-night');
    }


}
backgroudHours();


function goodDay(text, timeOfDay) {
    const date = new Date();
    timeOfDay = date.getHours();

    text = document.querySelector('#goodDay');

    if (timeOfDay >= 5 && timeOfDay <= 11) text.innerHTML = 'Bom Dia !!';
    else if (timeOfDay >= 12 && timeOfDay < 18) text.innerHTML = 'Boa Tarde !!';
    else if (timeOfDay >= 18 && timeOfDay <= 24) text.innerHTML = 'Boa Noite !!';
    else if (timeOfDay >= 1 && timeOfDay < 5) text.innerHTML = 'Boa Madrugada !!';
}
goodDay();


setInterval(() => {
    getHour();
}, 1000);