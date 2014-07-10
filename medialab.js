if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to medialab.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.login.events({
    'submit #login_form' : function(e,t){
      e.preventDefault();
      var email = t.find('#login_email').value;
      var password = t.find('#login_password').value;

      Meteor.loginWithPassword(email, password, function(err){
        if (err){
          //TODO
        }else{
          console.log("user logged in successfully");
        }
      });
      return false;
    }
  });

  Template.register.events({
    'submit #register_form' : function(e,t){
      e.preventDefault();
      var email = t.find('#account_email').value;
      var temp_password = t.find('#account_password').value;
      var password_confirmation = t.find('#account_password_confirmation').value;
      var password = temp_password===password_confirmation ? temp_password : null;

      Accounts.createUser({email:email, password:password}, function(err){
        if (err){
          //TODO
        }else{
          console.log("user created successfully");
        }
      });
      return false;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

    //if (!Meteor.roles.find({'admin'})){
    //  console.log("no admin found");
    //}

  });



  // var users = [
    //   {name:"Regular User",email:"normal@example.com",roles:[]},
    //   {name:"Uploading User",email:"upload@example.com",roles:['upload']},
    //   {name:"Admin User",email:"admin@example.com",roles:['admin','upload']}
    // ];

    // _.each(users, function (user) {
    //   var id;

    //   id = Accounts.createUser({
    //     email: user.email,
    //     password: "apple1",
    //     profile: { name: user.name }
    //   });

    //   if (user.roles.length > 0) {
    //     // Need _id of existing user record so this call must come 
    //     // after `Accounts.createUser` or `Accounts.onCreate`
    //     Roles.addUsersToRoles(id, user.roles);
    //   }
    // });

}