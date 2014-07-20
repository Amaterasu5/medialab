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
		'submit #updateForm':function(){

			Projects.insert({
				thumb:document.getElementByTagName('input')[0],
				title:document.getElementByTagName('input')[1],
				creators:document.getElementByTagName('input')[2],
				affiliations: document.getElementByTagName('input')[3],
				projectdesc:document.getElementByTagName('textarea')[0],
				researchurl:document.getElementByTagName('input')[4],
				keywords:document.getElementByTagName('input')[5],
				videourl:document.getElementByTagName('input')[6],
				imageurls:document.getElementByTagName('input')[7]
			})
		}
	});
	var myDropzone = new Dropzone("div#dropzone", { url: "/file/post"});
	myDropzone.on('addedfile',function(){
		alert("file successfully uploaded");
	});
}