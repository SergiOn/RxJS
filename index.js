"use strict";

const observer = {
    next: function nextCallback(data) {
        console.log(data);
    },

    complete: function completeCallback() {
        console.log('Done');
    },

    error: function errorCallback(err) {
        console.log('Error:', err);
    }
};



function startReceivingData(observer) {

}


startReceivingData(observer);
