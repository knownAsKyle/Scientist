"use strict";

(function () {
	"use strict";
	angular.module("scientist", ["ngMaterial"]);
})();
"use strict";

(function () {
    "use strict";
    angular.module("scientist").constant("config", {});
})();
"use strict";

(function () {
    "use strict";
    angular.module("scientist").controller("scientistController", scientistController);
    scientistController.$inject = ["$scope", "$timeout", "config", "scientistFactory"];

    function scientistController($scope, $timeout, config, scientistFactory) {
        this.tiles = scientistFactory.buildGridModel({
            icon: "./media/",
            title: "Name",
            background: ""
        });
        $scope.selectedItem = null;
        this.selectItem = function (item) {
            $timeout(function () {
                $scope.selectedItem = item;
                console.log($scope.selectedItem);
            });
        };
    }
})();
"use strict";

(function () {
    "use strict";
    angular.module("scientist").factory("scientistFactory", function () {
        return {
            buildGridModel: buildGridModel
        };

        function buildGridModel(tileTmpl) {
            var it,
                results = [];
            for (var j = 0; j < 12; j++) {
                it = angular.extend({}, tileTmpl);
                it.span = {
                    row: 1,
                    col: 1
                };
                switch (j + 1) {
                    case 1:
                        it.background = "red";
                        it.icon = it.icon + "docBrownSmall.jpg";
                        it.title = it.title = "Dr. Emmet Brown";
                        break;
                    case 2:
                        it.background = "green";
                        it.icon = it.icon + "egon2.jpg";
                        it.title = "Dr. Egon Spengler";
                        break;
                    case 3:
                        it.background = "darkBlue";
                        it.icon = it.icon + "don.jpg";
                        it.title = "Donatello";
                        break;
                    case 4:
                        it.background = "blue";
                        it.icon = it.icon + "muppets.jpg";
                        it.title = "Dr. Bunsen Honeydew & Beaker";
                        break;
                    case 5:
                        it.background = "yellow";
                        it.icon = it.icon + "nye.png";
                        it.title = "Dr. Bill Nye";
                        break;
                    case 6:
                        it.background = "pink";
                        it.icon = it.icon + "theBrain.jpg";
                        it.title = "The Brain";
                        break;
                    case 7:
                        it.background = "yellow";
                        it.icon = it.icon + "gadget.gif";
                        it.title = "Gadget Hackwrench";
                        break;
                    case 8:
                        it.background = "purple";
                        it.icon = it.icon + "station.jpg";
                        it.title = "Station";
                        break;
                    case 9:
                        it.background = "deepBlue";
                        it.icon = it.icon + "beakman.jpg";
                        it.title = "Beakman";
                        break;
                    case 10:
                        it.background = "lightPurple";
                        it.icon = it.icon + "pennyBrain.jpg";
                        it.title = "Penny and Brain";
                        break;

                    case 11:
                        it.background = "darkBlue";
                        it.icon = it.icon + "robotnik.png";
                        it.title = "Doctor Ivo Robotnik";
                        break;
                    case 12:
                        it.background = "red";
                        it.icon = it.icon + "shrunkKids.png";
                        it.title = "Dr. Wayne Szalinski";
                        break;
                }
                results.push(it);
            }
            console.log("results:", results);
            return results;
        }
    });
})();