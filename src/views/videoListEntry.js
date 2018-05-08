var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    var videos = new Videos();
    // _.each(videos, function(video) {
    //   video
    // })
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
