import angular from 'angular';
import headerComponent from './header';
import footerComponent from './footer';
import myBodyComponent from './mybody';
import myController from './mycontroller';
import myService from './myservice'

angular.module('ngWebpackingItUp', [])
    .component('header', headerComponent)
    .component('footer', footerComponent)
    .component('myBody', myBodyComponent)
    .controller('mycontroller', myController)
    .service('myservice', myService)