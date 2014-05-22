define(['backbone', '../models/Result'],
function(backbone, Result) {
    var Results = Backbone.Collection.extend({
        model: Result,
        url: 'http://api.flickr.com/services/rest/?api_key=76f8d3b17097b8211ec53991e7e3513e&method=flickr.photos.search&text=kitten&sort=interestingness-desc&radius=10&radius_units=mi&per_page=8&format=json&jsoncallback=?',
        defaults: {
        },
        isReady: false,

        initialize: function() {
            var me = this;

            function onSync() {
                me.isReady = true;
            }

            this.on('sync', onSync);
        }
    });

    return new Results();
});