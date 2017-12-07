var app = angular.module('userApp',['ngRoute']);
app.config(function($routeProvider) {
      $routeProvider
 
          // route for the home page
          .when('/', {
             templateUrl : 'index.html'
             
         }) 
         // route for the about page
         .when('/login', {
             templateUrl : 'login.html'
             // controller  : 'userCtrl',
            
         });
     // set our app up to have pretty URLS
     //$locationProvider.html5Mode(true);
 });


// <!-- hardcoding to check with routing -->

app.controller('userCtrl',function($scope,$location){
      
          $scope.login=function()
  { 
if($scope.user.UserName=="admin" && $scope.user.password=="admin" )
    {
      $location.path("/login");
    }
    
    else
    {
      alert("Please enter valid Username and Password");
    }
  }
});
      
    




