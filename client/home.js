$(document).ready(function(){

  $('#login_form').hide();
  $('#register_form').hide();

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

    $('.sign_in').click(function(){
      $('.fade2').removeClass('hidden',100);
      $('#login_form').show(100);
      console.log('show');
    });

    $('#sign_up').click(function(){
      $('#login_form').hide();
      $('#register_form').show(100);
    });

    $('#sign_in').click(function(){
      $('#login_form').show(100);
      $('#register_form').hide();
    });

    $(document).mouseup(function (e){
      var container = $("#login_form");
      var container2 = $('#register_form');
      if (!container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0 && !$('.sign_in').is(e.target)){
        $('.fade2').addClass("hidden");
        container.hide();
        container2.hide();
        console.log('hiding');
      }
    });

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

  $(document).on('click','.gv_panel',function(e){
    e.preventDefault();
    $('#section_three').addClass('hidden');
    $('#main_page_dark').addClass('fade',500);
    $('#close_button2').removeClass('hidden',500);
    $('#main_page_dark').append($('.gv_galleryWrap').css({
      'left':$(document).width()/2-420,
      'top':'13%'
    }));
  });

  $('#close_button2').click(function(){
    $('#replace_gallery').prepend($('.gv_galleryWrap').css({
      'left':''
    }));
    $('#main_page_dark').removeClass('fade',100);
    $('#close_button2').addClass('hidden');
    $('#section_three').removeClass('hidden');
    $('#main_page_dark').empty();
  });

  //Third page carousel
  $('#section_three').owlCarousel({
    singleItem:true,
    pagination:false,
    mouseDrag:false,
    touchDrag:false
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