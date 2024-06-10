angular.module('FoodApp', [])
  .controller('FoodController', function() {
    var vm = this;

    vm.checkFood = function() {
      var FoodArray = vm.Food.split(',');
      if (FoodArray.length > 3) {
        vm.message =  "Too much!";
      } else {
        vm.message = "Enjoy!";
      }
    };
  });
