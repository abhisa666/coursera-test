(function (){
	'using strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',foundItems);

	function foundItems(){
		var ddo={
					templateUrl: 'list.html',

				    scope: {
				      menu: '<',
				      onRemove: '&'
				    },

				};



		return ddo;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var menu = this;
		menu.searchTerm ="";
		menu.message="";

		menu.search = function(){

			if(menu.searchTerm!=""){
				menu.found=[];
				var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
		
				promise.then(function(result){
					menu.found = result;
					console.log(menu.found);
					if(menu.found.length==0){
					menu.message = "Nothing found";
					}else{
						menu.message ="";
					}
					
				})
			}
			else{
				menu.found=[];
				menu.message = "Nothing found!!";
			}
			
		};

		menu.onRemove = function(index){
			menu.found.splice(index,1);
		};

	

	}



	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;

		service.getMatchedMenuItems = function(searchTerm){

			var response = $http({
				method: "GET",
      			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
			});

			return response.then(function(result){

				var foundItems=[];


				for(item of result.data.menu_items){
				
					var des = item.description;
					

					if(des.indexOf(searchTerm)!=-1){
						foundItems.push(item);
					}
				}

				//console.log(foundItems);

				return foundItems;
			})

		}
	}




})();