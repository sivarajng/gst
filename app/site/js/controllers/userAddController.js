
app.controller('userAddController', function ($scope, $document, $http) {

    $scope.userAdd = {};

    $scope.addUser = function () {

        $http({
            url: '/addUser',
            method: 'post',
            headers:{'Content-Type':'application/x-www-form-urlencoded'},
            data:$scope.userAdd

        })
            .success(function (data, status, headers, config) { 
                console.log("SUCCESS : "+JSON.stringify(data));
            })
            .error(function (data, status, headers, config) {
                console.log("ERROR : "+data);
             });


    };

});