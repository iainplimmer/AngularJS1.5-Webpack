export default class myDirective {

    constructor() {
        this.restrict = 'A';
    }

    link(scope, element, attrs) {
        element.on('mouseover', function () {
            element.css({
                border: '1px solid black',
            });
        })
        element.on('mouseleave', function () {
            element.css({
                border: '0px',
            });
        })
    }
}