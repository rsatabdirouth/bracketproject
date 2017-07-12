angular.module('mainApp')
.config(function($routeProvider){
    $routeProvider
        
    .when('/',{templateUrl:'./home/_home.html',controller:'homeCtrl as home'})
  
    .when('/nextpage/:id',{templateUrl:'./nextpage/_nextpage.html',controller:'nextCtrl as next'})
});
