define(['../data/user-model', '../router'], function( UserModel, Router ){
  return Backbone.View.extend({
    el:'.create-user-input',
    events:{
      'submit #address-details':'saveAddress'
    },
    render: function(){
      var template = _.template( $( '#add-address-template' ).html() );
      var userModel = UserModel.getInstance();
      this.$el.html( template( {user: userModel.attributes} ) );
    },
    saveAddress: function (ev) {
      var userModel = UserModel.getInstance();
        var router = Router.getInstance();
      var address = $(ev.target).serializeJSON();

      userModel.set({
        'address1': address.address1,
        'address2': address.address2,
        'city': address.city,
        'state': address.state,
        'zipcode': address.zipcode
      });

      userModel.save( null, {
        success: function(){
          console.log( 'success' );
            router.navigate( 'home', {trigger: true} );
            return false;
        },
        error: function(){
          console.log( 'error');
            router.navigate( 'home', {trigger: true} );
            return false;
        }

      });
    }
  });
});
