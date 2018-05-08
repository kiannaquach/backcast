var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'clickHandler'
  },

  clickHandler: function() {
    this.model.select();
    // console.log("hello clicked!");
  },

  render: function() {
    // console.log('template', this.template);
    this.$el.html(this.template(this.model.attributes));
    // console.log('this.model.attr: ', this.model);

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
