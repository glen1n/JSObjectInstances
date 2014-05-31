;(function($) {
	$(function(){
//
//
		var Reptile = function(settings) {
			this.settings = $().extend({
			name: 'lizard',
			loc: 'desert',
			diet: 'vegitation'
			}, settings);

			console.log(settings);
			}

		var frog = new Reptile({
			name: 'frog',
			loc: 'swamp',
			diet: 'bugs'
			});

			console.log(frog);
			console.log(frog.settings.name);
			console.log(frog.settings.loc);
			console.log(frog.settings.diet);

	});
})(jQuery);
