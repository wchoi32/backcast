var SearchView = Backbone.View.extend({

  initialize: function () {
    this.render();
    // this.$('.btn').on('click', () => {
    //   var string = this.$('.form-control').val();
    // });
  },

  // events: {
  //   'click button': 'doShit'
  // },

  // doShit: function () {
  //   this.collection.search(this.$('.form-control').val());
  //   console.log(this.collection);
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
