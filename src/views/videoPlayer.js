var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.render);
  },
  
  render: function() {  

    /// first index of collection = firstModel
    //

    // console.log('collection version', this.collection.at(0));
    // console.log('model version', this.model);

    if (!this.collection.at(0)) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      // console.log('index', this.collection)
      // console.log('index', this.collection.at(0).attributes)
      this.$el.html(this.template(this.collection.at(0).attributes));
    }
    // console.log(this.collection);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
