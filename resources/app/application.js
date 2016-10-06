import angular from 'angular';
import headerComponent from './header';
import footerComponent from './footer';
import myController from './mycontroller';

angular.module('ngWebpackingItUp', [])
    .component('header', headerComponent)
    .component('footer', footerComponent)
    .controller('mycontroller', myController)