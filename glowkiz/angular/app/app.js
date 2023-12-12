var check = angular.module('check', ['ngRoute']);

check.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './view/home.html',
            controller: 'checkControler'
        })
}])

check.controller('checkControler', function ($scope) {
    $scope.message = "chcek"
});