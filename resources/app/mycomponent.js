import myController from './mycontroller';
import bodyTemplate from './templates/body.html';

let myComponent = {
  restrict: 'E',
  template: bodyTemplate,
  controller: myController
};

export default myComponent;


