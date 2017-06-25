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


const observable = {
    startReceivingData: function startReceivingData(observer) {
        let counts = 0;
        let intervalId;

        intervalId = setInterval(() => {
            counts++;
            observer.next(counts);

            if (counts > 5) {
                clearInterval(intervalId);
                observer.complete();
            }
        }, 300);
    }
};


observable.startReceivingData(observer);
