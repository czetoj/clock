'use strict';

function tictac() {
    let date = new Date();
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    const clock = document.querySelector('.clock');
    clock.textContent = `${hour}:${minute}:${second}`;


    let colorHour = hour;
    let colorMinute = minute;
    let colorSecond = second;

    if (hour < 5) {
        colorHour = 'ff';
    }
    if (minute < 30) {
        colorMinute = 'ff';
    }
    if (second < 20) {
        colorSecond = 'bf';
    }
    if (second > 40) {
        colorSecond = 'cc';
    }

    let hexaColor = `#${colorHour}${colorMinute}${colorSecond}`;
    document.body.style.backgroundColor = hexaColor;

    setTimeout(() => {
        tictac();
    }, 1000);

}

tictac();

