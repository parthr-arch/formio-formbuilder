var app = angular.module('myApp', ["ngRoute", "ui.router", "ui.bootstrap", "ui.select", "formio", "ngFormBuilder", "ngJsonExplorer"]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/form-builder');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .state('form-builder', {
            url: '/form-builder',
            templateUrl: 'views/form-builder.html',
            controller: 'FormIOController'
        })
        .state('form-preview', {
            url: '/form-preview',
            templateUrl: 'views/form-preview.html',
            controller: 'FormPreviewController'
        })
        .state('pre-generated-form-preview', {
            url: '/pre-generated-form-preview',
            templateUrl: 'views/pre-generated-form-preview.html',
            controller: 'PreGeneratedFormPreviewController'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html',
            controller: 'ErrorController'
        });
});