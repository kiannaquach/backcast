var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    console.log(this.videos);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: this.$('.list')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
