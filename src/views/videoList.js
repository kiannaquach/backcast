var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // want to append video to div
    this.collection.forEach( function(item) {
      var video = new VideoListEntryView({model: item}).render();
      // console.log('LOOK HERE', video.$el[0].innerHTML);
      this.$('.video-list').append(video.$el[0].innerHTML);
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
