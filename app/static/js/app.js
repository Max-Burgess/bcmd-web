(function() {
    'use strict';
    // Declare app level module which depends on views, and components
    var app = angular.module('weBCMD', ['ngRoute']);

    app.controller('DisplayModelsController', ['$scope', '$http',
        function($scope, $http) {
            $scope.data = {
                choice: null,
                models: available_models.models
            };

            $scope.submit = function() {
                var name = $scope.data.choice.model;
                console.log("Name is " + name)
                $http.get('/api/modelinfo', {
                    "params": {
                        "model_name": name
                    }
                }).then(function(response) {
                    $scope.infoCategories = [{
                            "name": "Inputs",
                            "data": response.data.input
                        },
                        {
                            "name": "Outputs",
                            "data": response.data.output
                        },
                        {
                            "name": "Parameters",
                            "data": response.data.params
                        }
                    ];
                });

            };
        }
    ]);
})();