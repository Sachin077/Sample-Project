angular.module('UserReg.services', []).
factory('UserRegAPIservice', function($http) {

  var foo = {};
  // Getting Information For Product With Id 

  foo.getUser = function(id){
    return $http({
      method: 'get',
      url: 'http://127.0.0.1:8888/api/get_user?id='+id,
    });
  }

  foo.addUser= function(firstname, lastname, age){
      var responseforauth = [];
      var xsrf = {
        'firstname' : firstname,
        'lastname': lastname,
        'age': age
      };  
      return $http({
        method: 'POST',
        url: 'http://127.0.0.1:8888/api/add_user/',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: xsrf
      })
  };


  foo.updateUser= function(id, firstname, lastname, age){
      var responseforauth = [];
      var xsrf = {
        'id' : id,
        'firstname' : firstname,
        'lastname': lastname,
        'age': age
      };  
      return $http({
        method: 'PUT',
        url: 'http://127.0.0.1:8888/api/',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: xsrf
      })
  };

  foo.deleteUser = function(id){
    return $http({
      method: 'delete',
      url: 'http://127.0.0.1:8888/api?id='+id,
    });
  }

  return foo;
});
