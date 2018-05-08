var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    // var videos = new Videos();
    // console.log('hello');
    // console.log('this is elZ!!!!', this.$el)

  },

  render: function() {
    // console.log('template', this.template);
    this.$el.html(this.template(this.model.attributes));
    // console.log('this.model.attr: ', this.model);

    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
