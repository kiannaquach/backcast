var SearchView = Backbone.View.extend({

  initialize: function() {
    // this.render();
  },

  events: {
    'click .btn': 'handleSearch'
  },

  handleSearch: function() {
    var input = this.$('input').val();
    
    if (input) {
      var results = this.collection.FILLIN_SEARCH_FUNCTION(input);
      // remove everything from the Video List
      // for each item in the results
      //    append the item to the Video List
      // remove the video from the player view
      // get the first item in the Video List
      // append the item into the player view
    }

    this.$('input').val('');

    console.log(this.$('input').val());
  },

  search: function(input) {
    // return a list of matching video entries
    // maybe an array?
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
