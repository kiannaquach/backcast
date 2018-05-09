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
      this.collection.search(input);
    }

    this.$('input').val('');

    console.log(this.$('input').val());
  },

  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
