angular.module('mainApp', [])
.controller('mainCtrl', mainCtrl)
.directive('myButton', myButton);

function mainCtrl() {
  this.first = function() {
    console.log(1,this);
  };
  this.second = function() {
    console.log(2,this);
  };
  this.third = function() {
    console.log(3,this);
  };
  this.fourth = function() {
    console.log(4,this);
  };
};

function myButton(){
  return {
    template: '<button>Click on me</button>'
  };
};