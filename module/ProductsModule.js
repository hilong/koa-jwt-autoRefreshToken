(function (angular) {
	'use strict';
	angular.module('ModuleProducts', ['ngRoute', 'ngAnimate'])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '/module/ProductListsTPL.html',
				controller: 'ListsController'
			}).when('/:carID', {
				templateUrl: '/module/ProductDetailsTPL.html',
				controller: 'DetailsController'
			});
		}])
		.factory('FactoryCars', ['$http', '$q', function ($http, $q) {
			var Stores = [{
				name: '店铺1'
			}, {
				name: '店铺2'
			}, {
				name: '店铺3'
			}, {
				name: '店铺4'
			}];
			return {
				all: function () {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: '/data/FactoryCars.json'
					}).success(function (data) {
						deferred.resolve(data);
					}).error(function (data) {
						deferred.reject(data);
					});
					return deferred.promise;
				},
				store: function () {
					return Stores;
				}
			};
		}])
		.controller('ListsController', ['$scope', 'FactoryCars', function ($scope, FactoryCars) {
			var promise = FactoryCars.all();

			promise.then(function (data) {
				$scope.Cars = data;
			});
			$scope.filter = function () {

			};
		}])
		.controller('DetailsController', ['$scope', '$routeParams', 'FactoryCars', '$anchorScroll', '$location', function ($scope, $routeParams, FactoryCars, $anchorScroll, $location) {
			$scope.store = FactoryCars.store();
			var id = $routeParams.carID,
				promise = FactoryCars.all();
			promise.then(function (data) {
				$scope.Car = data[id];
			});
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
