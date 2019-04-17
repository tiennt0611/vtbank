$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1) {
        //clearHeader, not clearheader - caps H
        $("#menu").addClass("menu1");
    }else {
        $("#menu").removeClass("menu1");
        $("#menu").addClass("menu2");

    }

    if (scroll<500){$('.w3-badge1').addClass('active');} else{$('.w3-badge1').removeClass('active');}
    if (scroll>500 && scroll<1300){$('.w3-badge2').addClass('active');} else{$('.w3-badge2').removeClass('active');}
    if (scroll>1300 && scroll<1800){$('.w3-badge3').addClass('active');} else{$('.w3-badge3').removeClass('active');}
    if (scroll>1800){$('.w3-badge4').addClass('active');} else{$('.w3-badge4').removeClass('active');}
}); //missing );


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


});


$(document).ready(function(){
            $('.car-img').click(function(){
                var parent = $(this).parents('.parent');
                parent.find('.car-2').addClass('show-info');
            });
        });

$(document).ready(function(){
            $('.car-2-close').click(function(){
                var parent = $(this).parents('.parent');
                parent.find('.car-2').removeClass('show-info');
            });
        });



(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    
    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      },1200);
    }
  });
})();
console.clear();