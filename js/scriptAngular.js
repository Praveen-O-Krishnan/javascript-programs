var moduleRef = angular.module('main', ['product','user']);
var moduleRefProduct = angular.module('product', []);
var moduleRefUser = angular.module('user', []);

moduleRef.config(function() {
  console.log('i am config of main module');
});

moduleRefProduct.config(function() {
  console.log('i am config of product module');
});

moduleRefUser.config(function() {
  console.log('i am config of user module');
});


moduleRef.controller('mainCntrl', cntrlFun);

function cntrlFun($scope) {
  $scope.name = 'Praveen';
  $scope.place = 'Bangalore';

  $scope.sayHello = function() {
    alert('Hi '+$scope.name+ ' you from '+$scope.place+ ' i think!');
  };
}

moduleRef.controller('new', studyFunc);
function studyFunc($scope) {
  $scope.name = 'praveen';
  $scope.location = 'bangalore';

  $scope.update = function() {
    alert($scope.name);
    //name = $scope.name;
    //location = $scope.location;
  };
}

var thoughtAppMain = angular.module('thoughtApp', ['ngStorage']);

thoughtAppMain.controller('thoughtAppCntrl', function($localStorage) {
  if($localStorage.thoughtArray.length === 0)
    $localStorage.thoughtArray = [];

    this.thoughtArray = $localStorage.thoughtArray;
    this.addThought = function() {
    this.thoughtArray.push(this.thought);
  };
});
