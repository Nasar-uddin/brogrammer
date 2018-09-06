$(document).ready(function(){
      var nav = $(".navbar");
      $(document).on("scroll",function(e){
          if(document.body.scrollTop>400||document.documentElement.scrollTop>400){
              nav.addClass("navbar-fixed-top");
          }else{
            nav.removeClass("navbar-fixed-top");
          }
      });
});