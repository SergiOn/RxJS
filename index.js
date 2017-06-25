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


const arrayObservable = {
    subscribe: function startReceivingData(obs) {
        [1, 2, 5, 99, 88, 7].forEach(obs.next);
        obs.complete();
    }
};


arrayObservable.subscribe(observer);
