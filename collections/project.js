var Projects = new Meteor.Collection('projects');

if (Meteor.isClient){
	Meteor.subscribe('projects');
}

if (Meteor.isServer){
	Meteor.publish('projects',function(){
		return Projects.find({});
	});
}