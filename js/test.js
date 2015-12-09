angular.module('APP', [])
	/*	.factory('SelectCar', ['$scope', '$http', function ($scope, $http) {
			$scope.Cars = $http.get('/js/selectCar.json');
			return {
				all: function () {
					return $scope.Cars;
				}
			};
		}])
		.controller('SelectCarController', ['$scope', 'SelectCar', function ($scope, SelectCar) {
			$scope.selectCar = SelectCar.all();
		}])	*/
	.controller('SelectCarController', ['$scope', '$http', function ($scope, $http) {
		$http.get('/js/selectCar.json').success(function (data) {
			$scope.selectCar = data;
		}).error(function () {
			alert('error');
		});
	}])
	.controller('threeLevelController', ['$scope', function ($scope) {
		$scope.division = {
			"北京市": {
				"北京市": ["东城区", "西城区", "朝阳区", "海淀区"]
			},
			"上海市": {
				"上海市": ["黄浦区", "徐汇区", "虹口区", "杨浦区"]
			},
			"天津市": {
				"天津市": ["", "", "", ""]
			}
		};
	}])
	.controller('AnchorScrollController', ['$scope', '$location', '$anchorScroll',
		function ($anchorScroll, $location, $scope) {
			$anchorScroll.yOffset = 50;
			$scope.gotoAnchor = function (x) {
				var newHash = 'anchor' + x;
				if ($location.hash() !== newHash) {
					$location.hash('anchor' + x);
				} else {
					$anchorScroll();
				}
			};
	}])
	.controller('Test1Controller', ['$scope', function ($scope) {
		$scope.Global = [{
				A: "亚洲",
				nat: [
					{
						B: "中国",
						cities: [
							{
								text: "北京"
						}
					]
				},
					{
						B: "韩国",
						cities: [
							{
								text: "首尔"
						}
					]
				},
					{
						B: "日本",
						cities: [
							{
								text: "东京"
						}
					]
				},
					{
						B: "泰国",
						cities: [
							{
								text: "曼谷"
						}
					]
				}, {
						B: "巴基斯坦",
						cities: [
							{
								text: "伊斯兰堡"
						}
					]
				},
					{
						B: "尼泊尔",
						cities: [
							{
								text: ""
						}
					]
				}
			]
	}, {
				A: "北美洲"
	}, {
				A: "南美洲"
	}, {
				A: "非洲"
	}, {
				A: "大洋洲"
	}, {
				A: "南极洲"
	}
	];
	}]);
