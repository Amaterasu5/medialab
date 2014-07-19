if (Meteor.isClient){

	Template.upload.email = function(){
		console.log(Meteor.user());
		user=Meteor.user();
		return user==null? null:user.emails[0].address;
	}
}
