

var app = angular.module('app', []);

// app.service('concerts', ['$http', function($http){
// 	this.getConcert = function(concerts){
// 		return $http.get('http://apis.is/concerts')
// 	}
// }])

// app.controller('MainCtrl', ['$scope', 'concerts', function ($scope, concerts) {
// 	concerts.getConcert('name').then(function(data, status){
// 		$scope.concerts = data;
// 	})
// }])

//-------------------- Regular Controller --------------------

// app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
// 	$http.get('http://apis.is/concerts').success(function(data, status, headers, config) {

// 		$scope.getConcert = function() {
// 			$http({
// 				method: 'GET',
// 				url: 'http://apis.is/concerts',
// 			})
// 			.then(function(concertData){
// 				console.log(concertData)
// 				$scope.concerts = concertData.data.results;
// 			})
// 		}
// 		$scope.getConcert();
		
// 	})

// }])

//------------------- Service and Controller -----------------

// var app = angular.module('app', []);
// Service
app.service('concerts', ['$http', function($http){
        return $http.get('http://apis.is/concerts')
    }])

//controller
app.controller('MainCtrl', ['$scope', 'concerts', function ($scope, concerts) {
    concerts.then(function(data){
        $scope.concerts = data;
    })
}])

