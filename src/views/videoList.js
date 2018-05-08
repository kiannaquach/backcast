var VideoListView = Backbone.View.extend({

  initialize: function() {
    var videos = new Videos();
    console.log(videos.exampleVideoData);
    this.render();
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
