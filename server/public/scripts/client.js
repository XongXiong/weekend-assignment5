var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/listings', {
        templateUrl: '../templates/listings.html',
        controller: 'ListingsController as listings'
    }).when('/rentals', {
        templateUrl: '../templates/rentals.html',
        controller: 'RentalsController as rentals'
    }).when('/home',{
        templateUrl: '../templates/home.html'
    });
});