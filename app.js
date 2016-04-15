var app = angular.module("myModule", ["ngRoute"]);

app.controller("myController", function() {

});

app.config(function($routeProvider) {
	$routeProvider
		.when("/cat",
		{
			controller: "myController",
			templateUrl: "partials/view1.html"
		})
		.when("/dog",
		{
			controller: "myController",
			templateUrl: "partials/view2.html"
		})
		.otherwise({ redirectTo: "/"});
});