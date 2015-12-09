var c = angular.module('APP.Controllers', ['APP.Services']);

c.controller('IndexController', ['$scope', function ($scope) {

}]);

c.controller('ProductsController', ['$scope', 'FactoryCars', function ($scope, FactoryCars) {
	var promise = FactoryCars.all();

	promise.then(function (data) {
		$scope.Cars = data;
	});
	}]);

c.controller('ChooseCarController', ['$scope', 'ChooseCars', function ($scope, ChooseCars) {
	var promise = ChooseCars.all();

	promise.then(function (data) {
		$scope.ChooseCars = data;
	}, function () {
		$scope.error = {
			error: '数据读取出错！'
		};
	});
}]);
