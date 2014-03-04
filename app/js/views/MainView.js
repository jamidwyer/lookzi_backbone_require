define(['jquery','underscore','backbone',
	'../models/Result',	'text!../../templates/result.html',
], 
function($, _, Backbone, Result, resultHTML) {

	MainView = function() {
		Result.on('sync', render);
		Result.fetch();
        
		var $el = $('.results-container');

		function render() {
            var results = Result.get('photos');
			var template = _.template(resultHTML, {
                results: results.photo
            });
			$el.html(template);
		}
	}

	return MainView;
});
