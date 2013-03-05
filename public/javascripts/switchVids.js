$(function () {
  var params = {allowScriptAccess: "always"};
  var atts = {id: "player1"};
  var clickToggle = 0;
  //swfobject.switchOffAutoHideShow();

  // swfobject.embedSWF("http://www.youtube.com/v/V-EFY90nOss?enablejsapi=1&playerapiid=player1&version=3", "player1-container", "425","356","8", null, null, params, atts);

  //&t=0m1s

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

      $('#player1').width(1);
      $('#player1').height(1);
      player1.seekTo(10, true);
      player1.playVideo();
      player1.mute();
      setTimeout(player1.pauseVideo(), 1);      

    };
    }

  $('#switchButton').click(function (id) {
    if (clickToggle == 0) {
      clickToggle = 1;

      $('#player1').width(425);
      $('#player1').height(356);
      player1.unMute();

      console.log(clickToggle);

      // player1.seekTo(1, true);

      player1.playVideo();

      $('#video1').css({display:"none"});

    } else {
      clickToggle = 0;

      player1.seekTo(10, true);
      player1.pauseVideo();
      
      $('#player1').width(1);
      $('#player1').height(1);
      $('#video1').css({display:""});
    };
  });
    return false;
});