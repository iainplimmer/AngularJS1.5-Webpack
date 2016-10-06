import myService from './myservice'

export default class myController {
	constructor($scope, myservice){
		
		let vm = this;
		vm.$scope = $scope;
        vm.data = [];

		myservice.GetData().then(function (response) {	
			vm.data = response.data;
		});
	}
}