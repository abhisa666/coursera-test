(function(){
	'using strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);  //singelton service

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buy = this;

		buy.items = ShoppingListCheckOffService.getItems("buy");
		buy.move = function(index){
			ShoppingListCheckOffService.moveItem(index);
		};

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
		bought.items = ShoppingListCheckOffService.getItems("bought");

	}

	function ShoppingListCheckOffService(){
		var service = this;

		var items= [{
			    name: "Milk",
			    quantity: "2"
			  },
			  {
			    name: "Donuts",
			    quantity: "200"
			  },
			  {
			    name: "Cookies",
			    quantity: "300"
			  },
			  {
			    name: "Chocolate",
			    quantity: "5"
			  },
			  {
			    name: "Chips",
			    quantity: "10"
			  }];

		var boughtitems =[];	  

		

		service.moveItem = function(index){
			var item={
				name : items[index].name,
				quantity : items[index].quantity
			};

			boughtitems.push(item);
			items.splice(index,1);

		};

		service.getItems = function (type){
			if(type==="buy"){
				return items;
			}
			else if(type==="bought"){
				return boughtitems;
			}	
       

       };
	}



})();