var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function (model, options) {
    let query = ' ';
    this.search(query, options.cb);
    //console.log(this.models);
    //this.on('sync', videos[0]);
  },

  search: function(query, cb) {
    Backbone.ajax({
      type: 'GET',
      data: {
        q: query,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        maxResults: 5
      }, 
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: (data) => {
        //console.log(data);
        this.set(this.parse(data));
        cb();
      },
      error: function(data) {
        //console.log('failed to get message: ', data);
      }
    });
  },

  parse: function(dataObj) {
    //dataObj.items.forEach();
    return dataObj.items;
  }

});
