var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function() {
    this.exampleVideoData = window.exampleVideoData;
  },

  render: function() {
    // console.log("hi");
    // console.log(window.exampleVideoData);
  }

  

});
