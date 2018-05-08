var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // console.log('videos', this.videos);
    // this.videoEntrys = new VideoListEntryView();
    // console.log(this.videos);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      collection: this.videos, 
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')
    }).render();
    
    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
