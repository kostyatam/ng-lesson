'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {router} from './routes';
import components from './components';
import services from './services';

let {item} = components;
let {DataService} = services;

let app = angular.module('app', [uiRouter]);

app
    .service(DataService.name, DataService.constructor)
    .directive(item.name, item.constructor)
    .config(router);