$(function () {
  var params = {allowScriptAccess: "always"};
  var atts = {id: "player1"};
  var clickToggle = 0;
  //swfobject.switchOffAutoHideShow();
  swfobject.embedSWF("http://www.youtube.com/v/MEbm-xLjEwk?enablejsapi=1&playerapiid=player1&version=3", "player1-container", "425","356","8", null, null, params, atts);
  //$('#player1-container-container').css({display:"none"})

  window.onYouTubePlayerReady = function(id)
  {
    var player1 = document.getElementById('player1');
    console.log('I am here now');
    if (clickToggle == 1) {
      player1.playVideo();
      //clickToggle = 0;
    } else {
      player1.playVideo();
      setTimeout(player1.pauseVideo(), 5);
      $('#player1').width(1);
      $('#player1').height(1);
      //clickToggle = 1;
      //$('#player1-container-container').css({display:"none"});
    }
    }

  $('#switchButton').click(function (id) {
    if (clickToggle == 0) {
      //clickToggle = 1;
      $('#player1').width(425);
      $('#player1').height(356);
      console.log(clickToggle);
      player1.playVideo();
      $('#video1').css({display:"none"});
    } else {
      clickToggle = 0;
      //console.log(clickToggle);
      player1.stopVideo();
      //$('#player1-container-container').css({display:"none"});
      $('#player1').width(1);
      $('#player1').height(1);
      $('#video1').css({display:""});
    };
  });
    return false;
});