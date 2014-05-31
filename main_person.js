;(function($) {
	$(function() {
		var Person = function(settings) {
			this.settings = $().extend({
				firstname: 'Bob',
				lastname: 'Robertson',
				job: 'web developer',
				weight: 210
				}, settings); 
			console.log(this.settings);	
			};

		var student1 = new Person({
			firstname: 'Robert',
			job: 'student'
			});

		console.log(student1);
		console.log(student1.settings.firstname);
		console.log(student1.settings.lastname);
		console.log(student1.settings.job);
		console.log(student1.settings.weight);

	});
})(jQuery);
