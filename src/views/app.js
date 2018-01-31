var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(null, { cb: () => {

      this.videoPlayer = new VideoPlayerView({ model: this.videos.at(0), collection: this.videos});
      this.videoListView = new VideoListView({ collection: this.videos});
      this.search = new SearchView({ collection: this.videos});

      this.videos.on('select', (video) => {
        this.videoPlayer = new VideoPlayerView({ model: video, collection: this.videos, el: this.videoPlayer.el});
      });

      this.videos.on('load', () => {
        this.render();
      });

      // this.search.on('submit', (string)=>{
      //   console.log(string);
      //   // this.videos.search = new VideoPlayerView({ model: video, el: this.videoPlayer.el});
      // });



      this.render();   
    }});
  },


  render: function() {
    this.$el.html(this.template());
    this.videoListView.render();
    this.$('.search').html(this.search.$el);

    this.search.$('.btn').on('click', () => {
      var string = this.search.$('.form-control').val();
      this.videos.search(string, () => {
        this.render();
        console.log(this.videos);
        // this.videoPlayer = new VideoPlayerView({model: this.videos.at(0)});
        let videos = this.videos;
        console.log('videos.at(0)', videos.at(0));
        this.videoPlayer = new VideoPlayerView({model: videos.at(0), el: this.videoPlayer.el});

      });

    });


    this.$('.player').html(this.videoPlayer.$el);
    this.$('.list').html(this.videoListView.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
