var VideoPlayerView = Backbone.View.extend({
  initialize: function() {

    //console.log(this.collection);

    //console.dir(this.model);
    // this.attributes = this.attributes || {};
    this.model = this.model || this.collection.at(0);
    this.render();
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
