var VideoListEntryView = Backbone.View.extend({
  // initialize: function() {
  //   this.render();
  // },
  initialize: function() {
    // this.$el.on({'click:.video-list-entry-title': this.model.select.bind(this.model)});
    this.$el.on({'click .video-list-entry-title': this.model.select.bind(this.model)});
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    //console.log(this.model.attributes);
    //console.log(this.template(this.model.attributes) );
    //this.$el.on({'click .video-list-entry-title': this.model.select.bind(this.model)});
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
