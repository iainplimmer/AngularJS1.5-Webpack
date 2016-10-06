import angular from 'angular';
import headerComponent from './components/header';
import footerComponent from './components/footer';

angular.module('ngWebpackingItUp', [])
    .component('header', headerComponent)
    .component('footer', footerComponent);