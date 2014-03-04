define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/result.html'
], function($, _, Backbone, projectListTemplate){
    var ResultView = Backbone.View.extend({
    el: $('.result-list'),
    render: function(){
      var data = {};
      var compiledTemplate = _.template( projectListTemplate, data );
      this.$el.append( compiledTemplate );
    }
  });
  // Our module now returns our view
  return ResultView;
});