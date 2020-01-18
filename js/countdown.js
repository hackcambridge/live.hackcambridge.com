var timer = document.getElementById("timer");
var start_time = 0
var end_time = Date.parse('January 19 2020 12:00:00 GMT+0000');


function getTimeRemainingText() {
    var current_time = Date.parse(new Date())
    var time_remaining = 0
    not_started = false

    if (start_time == 0) {
        return "Welcome to Hack Cambridge 101"
    }

    if (current_time < start_time) {
        time_remaining = start_time - current_time;
        not_started = true;
    } else {
        time_remaining = Math.max(end_time - current_time, 0)
    }
    var seconds = Math.floor((time_remaining / 1000) % 60);
    var minutes = Math.floor((time_remaining / 1000 / 60) % 60);
    var hours = Math.floor((time_remaining / (1000 * 60 * 60)) % 24);

    var string_to_return = hours + "h " + minutes + "m " + seconds + "s ";

    if (not_started) {
        string_to_return = "-" + string_to_return;
    }

    return string_to_return;
}



document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let total = 0;
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const key = event.keyCode

        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            total = 0;
        }

        if (key == 32) {
            total = total + 1
            if (total >= 3) {
                var d = new Date(currentTime);
                start_time = new Date(d.getTime() + 10000);
            }
        }
        lastKeyTime = currentTime;
    });
});

var t = getTimeRemainingText()
timer.innerText = t

var poll = setInterval(() => {
    var t = getTimeRemainingText()
    timer.innerText = t
}, (1000));

