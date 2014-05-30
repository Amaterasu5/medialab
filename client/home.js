$(document).ready(function(){
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

  $('#select_area').mouseenter(function(){
    //('#text').addClass('clickthru');
  });

  // $('#select_area').mouseleave(function(){
  //   $('#text_container').removeClass('hidden');
  //   $('#playButton').addClass('hidden');
  //   $('#text').unbind('mouseenter');
  //   setTimeout(function(){
  //     $('#text').mouseenter(function(){
  //       text_mouseenter();
  //     })},100);
  // });

  $('#select_area').click(function(){
    $('#playButton').addClass('hidden');
    $('#video').removeClass('hidden');
    $('#video_area').addClass('fade',500);
    $('#video').attr('src','http://www.youtube.com/embed/cUC_rzsiua8?autoplay=1');
  });

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

});