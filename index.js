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

function mapFn(transformationFn) {
    const inputObservable = this;
    return createObservable((obs) => {
        inputObservable.subscribe({
            next: (x) => obs.next(transformationFn(x)),
            complete: () => obs.complete(),
            error: (error) => obs.error(error)
        });
    });
}

function createObservable(subscribeFn) {
    return {
        map: mapFn,
        subscribe: subscribeFn
    }
}

const arrayObservable = createObservable(function startReceivingData(obs) {
    [1, 2, 5, 99, 88, 7].forEach(obs.next);
    obs.complete();
});


arrayObservable
    .map((x) => x * 10)
    .subscribe(observer);
