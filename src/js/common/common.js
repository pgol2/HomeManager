(function(){


    angular
        .module('common', [])
        .factory('Bills', common);

    function common(){

        var addListItem = function(){

        };

        var postList = function(){

        };

        var resetForm = function(){

        };

        var emptyForm = function() {
            return {
                title: "",
                category: "",
                creator: "",
                created: "",
                value: ""
            };
        };


        return {
          emptyForm: emptyForm
        };
    }

}());