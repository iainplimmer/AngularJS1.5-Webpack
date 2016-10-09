import angular from 'angular';
import headerComponent from './header';
import footerComponent from './footer';
import myComponent from './mycomponent';
import myController from './mycontroller';
import myService from './myservice'
import myDirective from './mydirective'

angular.module('ngWebpackingItUp', [])    
    .component('myComponent', myComponent)
    .controller('mycontroller', myController)
    .service('myservice', myService)
    .directive('myDirective', () => new myDirective)
    