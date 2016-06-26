'use strict';
import itemTemplate from './item.html';

export let constructor = item;
export let name = 'item';

function item () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        link: function ($scope) {
            $scope.gamers = $scope.data.gamersCount.join(', ');
        },
        template: itemTemplate
    }
}