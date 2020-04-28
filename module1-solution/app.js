(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
	$scope.inString = "";
	$scope.outputString="";
	$scope.colour="black";

	$scope.output = function(){
		var cnt = count($scope.inString);

		if(cnt>3){
			$scope.outputString = "Too Much!"; 
			$scope.colour = "green";
		}
		else if(cnt===0){
			$scope.outputString = "Please enter data first";
			$scope.colour = "red";
		}
		else{
			$scope.outputString = "Enjoy!"; 
			$scope.colour = "green";
		}

	};

	function count(string){
		var lunchArr = string.split(',');
		console.log(lunchArr);
		var c=0;
		for(var i=0;i<lunchArr.length;i++){
			if(lunchArr[i]===""){
				
			}
			else{
				c++;
			}
			
		}
		console.log(c);
		return c;
	}
}



})();