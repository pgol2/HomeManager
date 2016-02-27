(function () {


    angular
        .module('homeApp', [])
        .factory('Bills1', homeAppModelBills);

    function homeAppModelBills() {
        var emptyForm = function () {
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