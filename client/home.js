$(document).ready(function(){

  $('*').animate({opacity:1},1800);

  //Event handlers

  $('#select_area').mouseenter(function(){
    $('#text_container').addClass('hidden',400);
    $('#playButton').removeClass('hidden',400);
  });

  $('#select_area').mouseleave(function(){
    $('#text_container').removeClass('hidden',300);
    $('#playButton').addClass('hidden',300);
  });

  $('#select_area').click(function(){
    $.sidr('close');
    $('#playButton').addClass('hidden');
    $('#black_layer').addClass('fade',500);
    open_And_Close_Video();
    $('#video').attr('src','http://www.youtube.com/embed/cUC_rzsiua8?autoplay=1&showinfo=0&rel=0');
    $('#arrow').hide();
  });

  $('#close_button').click(function(){
    open_And_Close_Video();
    $('#black_layer').removeClass('fade',100);
    $('#video').attr('src','');
    $('#arrow').show();
  });

  var open_And_Close_Video = function(){
    $("#select_area").toggleClass('hidden');
    $('#video').toggleClass('hidden');
    $('#text').toggleClass('hidden');
    $('#close_button').toggleClass('hidden');
    $('#navbar2').toggleClass('hidden');
  }

    $('.email').attr('href','mailto:?subject=Check out this awesome project!&body='+window.location.href);

  //Navbar dropdown

  setInterval(function(){
    if ($(window).scrollTop()<window.innerHeight-60){
      $("#navbar").slideUp('fast');
    }else if ($(window).scrollTop()>=window.innerHeight-60){
      $("#navbar").slideDown('normal');
    }
    if ($(window).scrollTop()>=2*(window.innerHeight+90)){
      $('.subicons').hide('fast');
      $('.links').show('normal');
    }else{
      $('.subicons').show('normal');
      $('.links').hide('fast');
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

  $('.column_image').click(function(){
    $(this).next().galleryView();
    $first_para=$(this).next().next();
    $first_para.css('margin-top',0);
    $second_para=$(this).next().next().next();
    $('#gallery_text').removeClass('hidden').empty();
    $('#gallery_text').css('left',$('.gv_galleryWrap').width()+110);
    $('#gallery_text').height($('.gv_galleryWrap').height());
    $('#gallery_text').append($first_para.clone()).append($second_para.clone());
    $('#gallery_text').append('<p style="font-size:8pt;">The transformation of the artificial leaves mimics the transformation of the real organism, yet it is controllable through material programming.</p>');
  });

  //Third page carousel
  $('#section_three').owlCarousel({
    singleItem:true,
    pagination:false
  });

  $owl=$('#section_three').data('owlCarousel');
  
  $('#nav_head').click(function(){
    $owl.goTo(0);
  });

  $('#slide_2').click(function(){
    $owl.goTo(1);
  });

  $('#slide_3').click(function(){
    $owl.goTo(2);
  });

});