(function (angular) {
	'use strict';
	angular.module('ModuleBargain', ['ngRoute', 'ngAnimate'])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '/module/BargainListsTPL.html',
				controller: 'ListsController'
			}).when('/:carID', {
				templateUrl: '/module/BargainDetailsTPL.html',
				controller: 'DetailsController'
			});
		}])
		.factory('FactoryCars', ['$http', '$q', function ($http, $q) {
			return {
				all: function () {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: '/data/FactoryBargain.json'
					}).success(function (data) {
						deferred.resolve(data);
					}).error(function (data) {
						deferred.reject(data);
					});
					return deferred.promise;
				}
			};
		}])
		.controller('ListsController', ['$scope', 'FactoryCars', function ($scope, FactoryCars) {
			var promise = FactoryCars.all();

			promise.then(function (data) {
				$scope.Cars = data;
			});
		}])
		.controller('DetailsController', ['$scope', '$routeParams', 'FactoryCars', function ($scope, $routeParams, FactoryCars) {
			var id = $routeParams.carID,
				promise = FactoryCars.all();
			promise.then(function (data) {
				$scope.Car = data[id];
			});
		}])
		.controller('anchorScrollController', ['$anchorScroll', '$location', '$scope', function ($anchorScroll, $location, $scope) {
			$scope.gotoAnchor = function (x) {
				var newHash = 'anchor' + x;
				if ($location.hash() !== newHash) {
					$location.hash('anchor' + x);
				} else {
					$anchorScroll();
				}
			};
		}]);
}(window.angular));
