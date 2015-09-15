(function() {
    "use strict";
    angular.module("scientist")
        .factory("scientistFactory", scientistFactory);
    scientistFactory.$inject = ["config"];

    function scientistFactory(config) {
        return {
            activate: activate,
            selectScientist: selectScientist
        };

        function activate(list = config.scientist.defaultList) {
            return buildGridModel(list);
        }

        function selectScientist(item) {
            item.span.col = (item.span.col === 2) ? 1 : 2;
            item.span.row = (item.span.row === 2) ? 1 : 2;
            item.selected = (item.selected) ? null : true;
            return item;
        }

        function buildGridModel(list) {
            //Manipulate list if need be...
            return list;
        }
    }
})();