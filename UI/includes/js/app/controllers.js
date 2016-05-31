var app=angular.module('UserReg.controllers', ['infinite-scroll']);

app.controller('UserController', function($scope,  $http, UserRegAPIservice) {

    $scope.user = {}
    $scope.guser = {}
    $scope.auser = {}
    $scope.del = {}
    $scope.gotUser = false;
    $scope.added = false;
    $scope.nresult = false;
    $scope.ndresult = false;
    $scope.gresult = false;
    $scope.get_user = function(){
        UserRegAPIservice.getUser($scope.guid).success(function (response) {
            $scope.gotUser = false;
            $scope.gresult = false;
            //get the data
            $scope.guser = response;
            console.log(response);
            if(response) $scope.gotUser = true;
            if(!response) $scope.gresult = true;
        });
    }

     $scope.add_user = function(){
        UserRegAPIservice.addUser($scope.aufn, $scope.auln, $scope.aua).success(function (response) {
            //get the data
            $scope.auser = response;
            console.log(response);
            $scope.added = true;
        });
    }

    $scope.update_user = function(){
        UserRegAPIservice.updateUser($scope.uuid, $scope.uufn, $scope.uuln, $scope.uua).success(function (response) {
            //get the data
            $scope.user = response;
            console.log(response);
            $scope.nresult = !response.result;
        });
    }
      
    $scope.delete_user = function(){
        UserRegAPIservice.deleteUser($scope.duid).success(function (response) {
            //get the data
            $scope.del = response;
            console.log(response);
            $scope.nresult = !del.result;
        });
    }
});

"use strict";
describe('UserController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      expect(true).to.equal(true);
    });
  });
});