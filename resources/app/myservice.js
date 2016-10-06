export default class myService {
  
  constructor($http) {
    this.$http = $http;
  }
  
  // Example service function
  GetData () {
    return this.$http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

myService.$inject = ['$http'];