define(['jquery',
    'underscore',
    'backbone',
    '../models/Result',
    'text!../../templates/result.html',
    'text!../../templates/footer.html',
    'i18n!../models/nls/Lexicon'
], 
function($, _, Backbone, Result, resultHTML, footerHTML, Lexicon) {

    MainView = function() {
        Result.on('sync', render);
        Result.fetch();
        
        var $el = $('.container');

        function render() {
            $('body').addClass('lang-'+Lexicon.lang);
            var footerTemplate = _.template(footerHTML, {
                logo: Lexicon.images.logo,
                description: Lexicon.description.description
            });
            $el.find('.footer').html(footerTemplate);
            var results = Result.get('photos');
            var resultsTemplate = _.template(resultHTML, {
                results: results.photo
            });
            $el.find('.results-container').html(resultsTemplate);
        }
    }

    return MainView;
});
