define([],function(){
  var instance;

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'addAddress': 'addAddress'
    }
  });

  Router.getInstance = function() {
      if ( !instance ) {
        instance = new Router();
      }
      return instance;
  };
  return Router;
});
