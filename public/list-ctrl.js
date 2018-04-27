angular.module("ContactListApp").controller("ListCtrl", function($scope,$http) {

    function refresh(){
        $http.get("https://aws2018-staging.herokuapp.com/api/v1/contacts?apikey=asdfg").then(function (response){
            $scope.contacts = response.data;
        });
    }
    
    
    refresh();

});
