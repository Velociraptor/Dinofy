$(function () {
  $('#switchButton').click(function () {
  	console.log("sdflkmrelknerer");
  	if($('#video2').css('display') != "none"){ 
  		//show 1, hide 2
      $('#video1').css({display:""});
      $('#video2').css({display:"none"});
      $('#video2').attr("src","http://www.youtube.com/embed/MEbm-xLjEwk"); 
} else { 
	// show 2, hide 1
    $('#video1').css({display:"none"});
    $('#video2').css({display:""});
    $('#video2').attr("src","http://www.youtube.com/embed/MEbm-xLjEwk?autoplay=1");
}
    });
    return false;
});