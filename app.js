(function(){
'use strict';

  angular.module('myApp',[])

  .controller('DICtrller',DICtrller);

  DICtrller.inject=['$scope','$filter'];
  function DICtrller($scope,$filter){
    $scope.name="Ramya";
    $scope.toUpper=function(){
      var upCase=$filter('uppercase');
      $scope.name= upCase($scope.name);
    };

    //console.log($injector.annotate(DICtrller));

  }

})();


  /*.controller('nameCalcCtrl',function($scope){

    $scope.name="";
    $scope.totalVal=0;

    $scope.getCount=function(name){
      var totalCt=0;
      for(var i=0;i<name.length;i++){
        totalCt+=name.charCodeAt(i);
      }
      $scope.totalVal=totalCt;
    }

  });*/
