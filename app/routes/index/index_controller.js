'use strict'

export default function indexController ($scope, DataService) {
    let vm = this;
    vm.show = false;

    DataService.getData().then((data) => {
        vm.games = data;
        vm.show = true;
    });
}