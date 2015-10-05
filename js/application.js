
   $(function(){
          $("#slides").slidesjs({
            navigation: {
              active: true,
               effect: "fade"
            }
          });
        });
       
        

$(document).ready(function(){
   $('#simple-menu').sidr();
  
  $("#paquetes > div").on("mouseenter", function() {
    $(this).css({"background-color": "#696969", "font-weight":"italic"})
    $(this).find("#precio").css({"display":"block", "opacity":"1"});
    $(this).find("h2").css({"display":"none","opacity":"0"});
  });
  $("#paquetes > div").on("mouseleave", function() {
    $(this).css({"background-color": "#C0C0C0", "font-weight":"normal",})
    $(this).find("#precio").css({"display":"none","opacity":"0"});
    $(this).find("h2").css({"display":"block","opacity":"1"});
  });
  $(".paquete").on("mouseenter",function(event){
      event.stopPropagation();
      event.preventDefault();
    $(this).find("ul").closest("ul").slideToggle();
  });
  $(".paquete").on("mouseleave",function(event){
      event.stopPropagation();
      event.preventDefault();
    $(this).find("ul").closest("ul").slideToggle();
  });
  
});
