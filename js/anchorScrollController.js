(function () {
	'use strict';
	var app = angular.module('App', []);
	app.controller('anchorScrollController', ['$anchorScroll', '$location', '$scope'],
		function ($anchorScroll, $location, $scope) {
			$scope.gotoAnchor = function (x) {
				var newHash = 'anchor' + x;
				if ($location.hash() !== newHash) {
					$location.hash('anchor' + x);
				} else {
					$anchorScroll();
				}
			};
		});
}());
