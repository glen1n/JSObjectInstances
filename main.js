;(function($){
	$(function(){
		var Cart = function() {
			this.items = {};
			this.addItem = function(order) {
				$().extend(this.items, order);
			}
	        };


		var myCart = new Cart(); 

			var order = {
				item: 'bread',
				qty: 2
				}


			myCart.addItem(order);
			console.log(myCart.items);


	 });
})(jQuery);
