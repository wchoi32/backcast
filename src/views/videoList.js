var VideoListView = Backbone.View.extend({
  // initialize: function() {
  //   this.render();
  //   console.log(this.collection);
  // },
  // initialize: function () {
  //   this.render();
  // },
  /////////////

  initialize: function() {
    this.collection.on({'sync': this.render.bind(this) });
    // console.log(this.render())
    // this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // this.$el.empty();
    this.$el.children('.video-list').children().detach();
    this.collection.forEach(this.renderVideos, this);
    //console.log(this.$el);
    return this;
  },
  
  renderVideos: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    videoListEntryView.render();
    this.$('.video-list').append(videoListEntryView.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
