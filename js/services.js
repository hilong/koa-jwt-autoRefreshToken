//(function () {
//'use strict';
var s = angular.module('APP.Services', []);

s.factory('FactoryCars', ['$http', '$q', function ($http, $q) {
	'use strict';
	return {
		all: function () {
			var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
			$http({
				method: 'GET',
				url: '/data/FactoryCars.json'
			}).success(function (data) {
				deferred.resolve(data); // 声明执行成功，即http请求数据成功，可以返回数据了 
			}).error(function (data) {
				deferred.reject(data); // 声明执行失败，即服务器返回错误
			});
			return deferred.promise; // 返回承诺，这里并不是最终数据，而是访问最终数据的API
		}
	};
	}]);

s.factory('ChooseCars', ['$http', '$q', function ($http, $q) {
	'use strict';
	return {
		all: function () {
			var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
			$http({
				method: 'GET',
				url: '/data/ChooseCars.json'
			}).success(function (data) {
				deferred.resolve(data); // 声明执行成功，即http请求数据成功，可以返回数据了 
			}).error(function (data) {
				deferred.reject(data); // 声明执行失败，即服务器返回错误
			});
			return deferred.promise; // 返回承诺，这里并不是最终数据，而是访问最终数据的API
		}
	};
	}]);

//}());
