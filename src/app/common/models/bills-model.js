(function () {


    angular
        .module('homeApp.model.bills', [])
        .factory('Bills', homeAppModelBills);

    function homeAppModelBills() {
        var emptyForm = function () {
            return {
                title: "",
                category: "Bills",
                creator: "",
                value: ""
            };
        };

        billsList = []
        categories = ["Bills", "Foodie", "Cleaning", "To-buy list"];


        return {
            billsList: billsList,
            categories: categories,
            emptyForm: emptyForm
        }
    };

}());