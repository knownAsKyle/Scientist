(function() {
    "use strict";
    angular.module("scientist")
        .controller("scientistController", scientistController);
    scientistController.$inject = ["$scope", "$timeout", "config", "scientistFactory"];

    function scientistController($scope, $timeout, config, scientistFactory) {
        this.tiles = scientistFactory.buildGridModel({
            icon: "./media/",
            title: "Name",
            background: ""
        });
        $scope.selectedItem = null;
        this.selectItem = function(item) {
            $timeout(function() {
                $scope.selectedItem = item;
                console.log($scope.selectedItem);
            });
        };
    }
})();