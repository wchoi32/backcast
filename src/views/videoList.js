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
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideos, this);

    return this;
  },
  
  renderVideos: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
