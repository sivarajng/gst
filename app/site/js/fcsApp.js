var app = angular.module("fcsApp", ["ngRoute",'ngMaterial', 'ngMessages']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/dash"
       
    })
    .when("/userAdd", {
        templateUrl : "/views/userAdd",
        controller:"userAddController"
       
    })
    .when("/calender", {
        templateUrl : "/views/calender"
       
    });
});

