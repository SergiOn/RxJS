"use strict";

function nextCallback(data) {
    console.log(data);
}

function completeCallback() {
    console.log('Done');
}

function errorCallback(err) {
    console.log('Error:', err);
}


// function startReceivingData(next, complete) {
//     [1, 2, 3, 4, 5].forEach(next);
//     complete();
// }

function startReceivingData(next, complete) {
    document.addEventListener('click', next);
    complete();
}


startReceivingData(nextCallback, completeCallback, errorCallback);
