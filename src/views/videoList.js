var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collections = new Videos();
    // this.collections.exampleVideoData;
    // console.log('look at this array', this.collections.exampleVideoData);
    this.render();
    // console.log(this.collections)
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    // want to append video to div
    // console.log('collectionsssss ',this.collections)
    this.collections.exampleVideoData.forEach( function(item) {
      var video = new VideoListEntryView({model: item}).render();
      // console.log('LOOK HERE', video.$el[0].innerHTML);
      this.$('.video-list').append(video.$el[0].innerHTML);

      // var title = item.snippet.channelTitle;
      // var description = item.snippet.description;
      // this.$('.video-list').append('<strong>' + title + ' </strong>');
      // this.$('.video-list').append(description);
      // this.$('.video-list').append('<br/><br/>');
      // this.$('.video-list-entry-title').append(title);
      // this.$('.video-list-entry-detail').append(description);
    });

    // var array = this.collections.exampleVideoData.map(function(item){
    // });



    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
