Router.map(function(){
	this.route('home',{path: '/'},{home:function(){
		Session.set('currentPage','homePage');
	}});
	this.route('upload',{path: 'upload_project'},{upload:function(){
		Session.set('currentPage','uploadPage');
	}});
});;