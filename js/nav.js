$("#nav a").on("mouseover", function () {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
  $("#nav .slide2").css({ opacity: 1, left: +position.left, width: width }).addClass("squeeze");
});
$("#nav a").on("mouseout", function () {
  $("#nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
}); 

const use = document.querySelector('.use')
use.addEventListener('click',()=> {
  window.location.href = 'login.html'
})