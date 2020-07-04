(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.checkOff = function(itemIndex) {
            ShoppingListCheckOffService.checkOff(itemIndex);
        }
    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [{
            name: "paprika",
            quantity: "5"
        }, {
            name: "cookies",
            quantity: "10"
        },{
            name: "fruits",
            quantity: "10"
        }, {
            name: "cakes",
            quantity: "25"
        }, {
            name: "apples",
            quantity: " 5"
        }, {
            name: "tomatos",
            quantity: " 10"
        }, {
            name: "chocolates",
            quantity: "Pack of 25"
        }];
        var boughtItems = [];
        service.getToBuyItems = function() {
            return toBuyItems;
        };
        service.getBoughtItems = function() {
            return boughtItems;
        };
        service.checkOff = function(itemIndex) {
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1);
        };
    }
})();