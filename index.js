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

// array
// function startReceivingData(next, error, complete) {
//     [1, 2, 3, 4, 5].forEach(next);
//     complete();
// }

// event
// function startReceivingData(next, error, complete) {
//     // document.addEventListener('click', next);
//     document.addEventListener('click', (e) => {
//         next(e);
//         complete();
//     });
// }

// promises
// function startReceivingData(next, error, complete) {
//     fetch('http://api.github.com')
//         .then((res) => res.json(), error)
//         .then(next, error);
// }

// stream
function startReceivingData(next, error, complete) {
    setInterval(() => {
        next('tick');
    }, 300);
}


startReceivingData(nextCallback, errorCallback, completeCallback);
