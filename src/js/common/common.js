(function(){


    angular
        .module('common', [])
        .factory('Bills', common);

    function common(){

        var addListItem = function(){

        };

        var postList = function(){

        };

        var emptyForm = function() {
            return {
                title: "",
                category: "",
                creator: "",
                value: ""
            };
        };


        return {
          emptyForm: emptyForm
        };
    }

}());