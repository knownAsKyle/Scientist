(function() {
    "use strict";
    angular.module("scientist")
        .controller("scientistController", scientistController);
    scientistController.$inject = ["$scope", "$timeout", "config", "scientistFactory"];

    function scientistController($scope, $timeout, config, scientistFactory) {
        /*jshint validthis:true */
        this.tiles = scientistFactory.activate();
        this.selectItem = function(item) {
            $scope.selectedItem = scientistFactory.selectScientist(item);
        };
    }
})();