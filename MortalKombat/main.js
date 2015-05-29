var app = angular.module('MortalKombat', []);

app.service('modelManager', function (modelService) {
     this.getArray = function() {
        return modelService.cartoonArray;
    };

        this.getCartoons = {};

});


app.controller('mainCtrl', function($scope, modelManager, modelService) {

    $scope.findArray = modelManager.getArray();

    $scope.addCartoon = function() {
        modelService.cartoonArray.push($scope.newCartoon);
        this.newCartoon = {};
    };


    $scope.deleteCartoon = function(index) {
        modelService.cartoonArray.splice(index, 1);

    };
});


