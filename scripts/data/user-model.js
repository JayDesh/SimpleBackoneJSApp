define([], function(){
  var instance;

  var UserModel = Backbone.Model.extend({
    urlRoot: '/users'
  });

  UserModel.getInstance = function( userDetails ){
    if(!instance){
      instance = new UserModel( userDetails );
    }
    return instance;
  };
  return UserModel;
});
