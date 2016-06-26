'use strict';
import indexController from './index/index_controller.js';
import indexTemplate from './index/index.html';

export {router};

function router ($stateProvider) {
    $stateProvider
        .state('index', {
            url: '',
            controller: indexController,
            controllerAs: 'vm',
            template: indexTemplate
        })
}