angular.module("ContactListApp").controller("ListCtrl", function($scope,$http) {

    function refresh(){
        $http.get("https://aws2017-staging.herokuapp.com/api/v1/contacts?apikey=1234abcd").then(function (response){
            $scope.contacts = response.data;
        });
    }
    
    
    refresh();

});
