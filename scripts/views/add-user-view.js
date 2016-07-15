define(['../data/user-model', '../router'],function(UserModel, Router){
  return Backbone.View.extend({
    el: '.create-user-input',
    events: {
      'submit #user-details': 'saveName'
    },
    render: function(){
      var template = _.template($('#add-user-template').html());
      this.$el.html(template({}));
    },
    saveName: function(ev){
      var userDetails = $(ev.currentTarget).serializeJSON();
      var userModel = UserModel.getInstance( userDetails );
      var router = Router.getInstance();
      router.navigate('addAddress', {trigger: true});
      return false;
    }
  });
});
