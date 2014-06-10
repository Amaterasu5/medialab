$(document).ready(function(){

  //$('#photo_container').css({
  //  'top':$(document).height()-window.innerHeight
  //});

  //Event handlers

  $('#select_area').mouseenter(function(){
    text_mouseenter();
  });

  $('#select_area').mouseleave(function(){
    $('#text_container').removeClass('hidden');
    $('#playButton').addClass('hidden');
  });

  var text_mouseenter = function(){
    $('#text_container').addClass('hidden');
    $('#playButton').removeClass('hidden');
  }

  $('#select_area').click(function(){
    $.sidr('close');
    $('#playButton').addClass('hidden');
    $('#black_layer').addClass('fade',500);
    open_And_Close_Video();
    $('#video').attr('src','http://www.youtube.com/embed/cUC_rzsiua8?autoplay=1&showinfo=0&rel=0');
  });

  $('#close_button').click(function(){
    open_And_Close_Video();
    $('#black_layer').removeClass('fade',100);
    $('#video').attr('src','');
  });

  var open_And_Close_Video = function(){
    $("#select_area").toggleClass('hidden');
    $('#video').toggleClass('hidden');
    $('#text').toggleClass('hidden');
    $('#close_button').toggleClass('hidden');
    $('#navbar2').toggleClass('hidden');
  }

  //Navbar dropdown

  setInterval(function(){
    if ($(window).scrollTop()>=window.innerHeight-60){
      $("#navbar").slideDown('fast');
    }
  },50);

  setInterval(function(){
    if ($(window).scrollTop()<window.innerHeight-60){
      $("#navbar").slideUp('fast');
    }
  },50);

  //Responsive Sidr Menu

  $('.simple-menu').sidr({
    side:'right',
    onOpen: function(){
      $('#navbar2').animate({'width':$('#navbar2').width() - $("#sidr").width()},200);
      $('#navbar').animate({'width':$('#navbar').width() - $("#sidr").width()},200);
      $('#video_area').animate({'width':$('#video_area').width() - $("#sidr").width()},200);
      $('#section_two').animate({'width':$('#section_two').width() - $("#sidr").width()},200);
      $('#playButton').css('left','35%');
      $('#select_area').css('left','25%');
      $('#select_area').css('top','36%');
    },
    onClose: function(){
      $('#navbar2').animate({'width':'100%'},200);
      $('#navbar').animate({'width':'100%'},200);
      $('#video_area').animate({'width':'100%'},200);
      $('#section_two').animate({'width':'100%'},200);
      $('#playButton').css('left','47%');
      $('#select_area').css('left','38%');
      $('#select_area').css('top','33%');
      $('body').css('width','100%');
    }
  });


  $(window).resize(function(){
    //Sidr bug onresize - just close it
    jQuery.sidr('close');
  });

  
});