requirejs(['views/add-user-view', 'views/add-address-view','router'], function(AddUserView, AddAddressView, Router){

  var addUserView = new AddUserView();
  var addAddressView = new AddAddressView();

  var router = Router.getInstance();
  router.on( 'route:home', function(){
    addUserView.render();
  });

  router.on( 'route:addAddress', function(){
    addAddressView.render();
  });

  Backbone.history.start();
});
