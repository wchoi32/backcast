var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    console.log(this.videos);

    this.videoPlayer = new VideoPlayerView({ collection: this.videos });
    this.videoListView = new VideoListView({ collection: this.videos});
    this.search = new SearchView();
    this.render();
  
  },


  render: function() {
    this.$el.html(this.template());
    this.videoListView.render();
    this.$('.search').html(this.search.$el);
    this.$('.player').html(this.videoPlayer.$el);
    this.$('.list').html(this.videoListView.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
