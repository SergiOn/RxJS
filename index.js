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


function startReceivingData(next, error, complete) {

}


startReceivingData(nextCallback, errorCallback, completeCallback);
