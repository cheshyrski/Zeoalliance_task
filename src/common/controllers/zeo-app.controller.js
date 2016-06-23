(function() {
	"use strict";

	angular
		.module('zeo-app')
		.controller('ZeoAppController', ZeoAppController);

	function ZeoAppController($scope, ZeoAppService) {
		
        $scope.steps = ZeoAppService.steps;
        $scope.features = ZeoAppService.features;
        $scope.reviews = ZeoAppService.reviews;

        /* Display default feature in right window */
        $scope.currentSrc = $scope.features[0].feature_src;
        $scope.currentTitle = $scope.features[0].title;
        $scope.currentDescription = $scope.features[0].description;

        $scope.getFeature = getFeature;

        function getFeature (feature) {
        	$scope.currentSrc = feature.feature_src;
        	$scope.currentTitle = feature.title;
        	$scope.currentDescription = feature.description;
        }
    }
})();