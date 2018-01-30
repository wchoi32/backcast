var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function() {
    $.ajax({
      type: 'GET https://www.googleapis.com/youtube/v3/search',
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        console.log('failed to get message: ', data);
      }
    });
  }

});
