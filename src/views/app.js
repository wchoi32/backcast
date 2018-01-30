var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //this.videos = new Videos();
    //console.dir(this.videos);
    this.videos = new Videos(null, {cb: ()=>{
      //console.dir(this.videos);
      
      this.videoPlayer = new VideoPlayerView({ model: this.videos.at(0)});
      this.videoListView = new VideoListView({ collection: this.videos});
      this.search = new SearchView();
      this.videos.on('select', (video)=>{
        this.videoPlayer = new VideoPlayerView({ model: video, el: this.videoPlayer.el});
        //console.log(this.videoPlayer);    
      });
      this.render();
      

    }});
    
    //console.log("this.videos", this.get());
  
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
