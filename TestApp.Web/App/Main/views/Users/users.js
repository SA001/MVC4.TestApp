﻿(function () {
    var controllerId = 'app.views.users';
    angular.module('app').controller(controllerId, [
        '$scope', 'UserService', '$location', function ($scope, UserService, $location) {
            var vm = this;
            vm.showUser = function (userId) {                
                UserService.showUser(userId);
                //console.log(user);
            }
            vm.deleteUser = function (userId) {
                UserService.deleteUser(userId)
                .success(function () {
                    getUsers();
                    //console.log(vm.users);
                });
            }
            vm.time = new Date().toString();
            function getUsers() {
                UserService.getUsers()
                    .success(function (data) {
                        vm.users = data.result;
                        //console.log(vm.users);
                    })
                    .error(function (error) {
                        vm.status = 'Unable to load user data: ' + error.message;
                        console.log(vm.status);
                    });
            }
            
            getUsers();

            //About logic...
        }
    ]);
    

    
})();