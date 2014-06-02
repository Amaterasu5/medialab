$(document).ready(function(){

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

  //From grayscale to color

  setInterval(function(){
    var curr_scroll=$(window).scrollTop();
    if (curr_scroll>=window.innerHeight*1.3){
      if (curr_scroll>=window.innerHeight*1.6){
        $('#section_two').css({
          '-moz-filter':'none',
          '-o-filter':'none',
          '-webkit-filter':'none',
          'filter':'none'
        });
      }else{
        $('#section_two').css({
          '-moz-filter':'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
          '-o-filter':'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
          '-webkit-filter':'grayscale(100%)',
          'filter':'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")'
      });
      }
      var range = $(document).height()-window.innerHeight*2.6;
      var opacity = Math.min((curr_scroll-window.innerHeight*1.3)/range,1);
      $('#section_two_gradient').css('opacity',opacity);
    }
  },5);

  //Responsive Sidr Menu

  $('.simple-menu').sidr({
    side:'right',
    onOpen: function(){
      $('#navbar2').animate({'width':$('#navbar2').width() - $("#sidr").width()},200);
      $('#navbar').animate({'width':$('#navbar').width() - $("#sidr").width()},200);
      $('#video_area').animate({'width':$('#video_area').width() - $("#sidr").width()},200);
      $('#section_two').animate({'width':$('#section_two').width() - $("#sidr").width()},200);
      $('#playButton').css('left','34%');
      $('#playButton').css('top','40%');
      $('#select_area').css('left','25%');
      $('#select_area').css('top','36%');
    },
    onClose: function(){
      $('#navbar2').animate({'width':$('#navbar2').width() + $("#sidr").width()},200);
      $('#navbar').animate({'width':$('#navbar').width() + $("#sidr").width()},200);
      $('#video_area').animate({'width':$('#video_area').width() + $("#sidr").width()},200);
      $('#section_two').animate({'width':$('#section_two').width() + $("#sidr").width()},200);
      $('#playButton').css('left','47%');
      $('#playButton').css('top','37%');
      $('#select_area').css('left','38%');
      $('#select_area').css('top','33%');
    }
  });

  //Sidr bug onresize - just close it

  window.onresize = function(){
    jQuery.sidr('close');
  }

});