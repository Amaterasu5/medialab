$(document).ready(function(){
  var inPlayButton = false;
  $('#text').mouseenter(function(){
    text_mouseenter();
  });

  $('#text').mouseleave(function(){
    if (!inPlayButton){
      $('#text_container').removeClass('hidden');
      $('#playButton').addClass('hidden');
    }
  });

  var text_mouseenter = function(){
    $('#text_container').addClass('hidden');
    $('#playButton').removeClass('hidden');
  }

  $('#playButton').mouseenter(function(){
    inPlayButton=true;
    //('#text').addClass('clickthru');
  });

  $('#playButton').mouseleave(function(){
    inPlayButton=false;
    $('#text_container').removeClass('hidden');
    $('#playButton').addClass('hidden');
    $('#text').unbind('mouseenter');
    setTimeout(function(){
      $('#text').mouseenter(function(){
        text_mouseenter();
      })},100);
  });

  $('#playButton').click(function(){
    $(this).addClass('hidden');
    $('#video').removeClass('hidden');
    $('#video_area').addClass('fade',500);
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