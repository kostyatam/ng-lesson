'use strict'
import data from 'data';

export let name = 'DataService';
export let constructor = DataService;

function DataService ($q) {
    let promise = $q((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });

    this.getData = getData;

    function getData () {
        return promise;
    }
}