var app = angular.module('mySite', ['ui.router']);

app.config(function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('stuff', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'HomeController'
    });
});

app.controller('HomeController', ['$scope', function($scope) {
  $scope.greeting = "Hola!!";
}]);
