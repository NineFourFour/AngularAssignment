(function(){
	var myApp = angular.module("listItems", []);
	myApp.controller("toDoList", function($scope){
		var items =[];
		$scope.items = items;
		$scope.addListItem = function(){
			$scope.items.push(
				{
					name: $scope.newItem.name,
					description: $scope.newItem.description
				}
			);
		}
		$scope.delete = function($index){
			$index = $scope.num;
			$scope.items.splice($index,1);
		}
	});
})();