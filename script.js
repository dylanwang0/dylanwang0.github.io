let progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
//$(window).on("load",function(){
//  $(".loader-wrapper").fadeOut("slow");
//});

$("document").ready(function() {
  setTimeout(function(){
      $(".loader-wrapper").fadeOut("slow")
  }, 1300);
});
