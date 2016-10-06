import myController from './mycontroller';

let myBodyComponent = {
  restrict: 'E',
  template: `
    <p ng-repeat="item in $ctrl.data">{{ item.title }}</p>
  `,
  controller: myController
};

export default myBodyComponent;