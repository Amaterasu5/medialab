if (Meteor.isClient){

	Template.upload.email = function(){
		user=Meteor.user();
		return user==null? null:user.emails[0].address;
	}

	Template.upload.events({
		'change #uploadButton': function(e,t){
			var upload = $('#uploadButton')[0];
			var holder = $('#pic_holder')[0];
			e.preventDefault();
  			var file = upload.files[0];
      		var reader = new FileReader();
  			reader.onload = function (event) {
    			var img = new Image();
    			img.src = event.target.result;
    			if (img.width > 300) {
      				img.width = 300;
    			}if (img.height > 300){
    				img.height = 300;
    			}
    			holder.innerHTML = '';
    			holder.appendChild(img);
  			};
  			reader.readAsDataURL(file);
  			return false;
		},
		'submit #updateForm':function(e,t){
			e.preventDefault();
			var dropimages = [];
			var imageurls = myDropzone.files;
			console.log(imageurls);
			for (file in imageurls){
				var picture = {
					data: {
						photo:file
					}
				}

				var token = {
      				public: '31423d6a70fd9a88ffccaa8c71521b06',
      				secret: 'a0f7884ef8d694f7'
				}

				$.ajax({
					url:'https://up.flickr.com/services/upload/',
					type:'POST',
					data: oauth.authorize(picture,token)
				}).done(function(data){
					var photo_url='https://www.flickr.com/photos/tangible_media/'+data.url;
					dropimages.push(photo_url);
				});
			}

			Projects.insert({
				thumb:document.getElementsByTagName('input')[0],
				title:document.getElementsByTagName('input')[1],
				creators:document.getElementsByTagName('input')[2].split(','),
				affiliations: document.getElementsByTagName('input')[3].split(','),
				projectdesc:document.getElementsByTagName('textarea')[0],
				researchurl:document.getElementsByTagName('input')[4],
				keywords:document.getElementsByTagName('input')[5].split(','),
				videourl:document.getElementsByTagName('input')[6],
				imageurls:dropimages+document.getElementsByTagName('input')[7]
			},function(err,id){
				console.log('err');
			});

			return false;
		}
	});
	Template.upload.rendered = function(){
		var myDropzone = new Dropzone("#dropzone",{
    		url: "/upload",
    		addRemoveLinks: true,
    		autoProcessQueue: true,
    		uploadMultiple: true,
    		clickable: true,
    		autoDiscover: true,
    		init:function(){
    			Dropzone.files=[];
    		}
    	});
    	myDropzone.on('addedfile',function(file){
    		Dropzone.files.push(file);
    	});
	}
}