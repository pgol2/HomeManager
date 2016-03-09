(function () {


    angular
        .module('common', [])
        .factory('BillsOld', common);

    function common(){
        var emptyForm = function() {
            return {
                title: "",
                category: "Inne",
                creator: "",
                value: ""
            };
        };

        return {
            emptyForm: emptyForm
        }
    };

}());