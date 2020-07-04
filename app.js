(function() {
    "use strict";
  
    angular.module("ShoppingListCheckOff", [])
      .controller("ToBuyShoppingController", ToBuyShoppingController)
      .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
      .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  
  
    ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var list = this;
  
      list.items = ShoppingListCheckOffService.getItemsToBuy();
  
      list.checkOff = function(itemIndex) {
        console.log("Checking off item ", itemIndex);
        ShoppingListCheckOffService.checkOff(itemIndex);
      };
    }
  
  
    AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var list = this;
  
      list.items = ShoppingListCheckOffService.getItemsBought();
    }
  
  
    // ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
      var service = this;
  
      var itemsToBuy = [ 
        { name: "Apples", quantity: 1 }, 
        { name: "Paprika", quantity: 2 }, 
        { name: "tomatos", quantity: 3 }, 
        { name: "frites", quantity: 4 }, 
        { name: "sucker", quantity: 5 }, 
        { name: "lasagna", quantity: 6 }, 
        { name: "pizzas", quantity: 7 }, 
       
      ];
  
      var itemsBought = [];
  
      service.getItemsToBuy = function () {
        return itemsToBuy;
      };
  
      service.getItemsBought = function () {
        return itemsBought;
      };
  
      service.checkOff = function (itemIndex) {
        itemsBought.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
      };
    }
  })();