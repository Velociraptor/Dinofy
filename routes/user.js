
/*
 * GET users listing.
 */

var echojs = require('echojs');

var echo = echojs({
  key: 'LI1N2JJN3TQBT59SD'
});

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.upload = function(req, res){
  res.send("Upload a Song Here (eventually)");
};

exports.artist_search = function(req, res){

  echo('artist/video').get({
	  name: req.body['artist'],
	  results:100
	}, function (err, json) {
	  //console.log(json.response);
	  //console.log(json.response.video);
	  if (json.response.video == undefined) {
	    res.render('index', {title:'DINOFY!!!', artist:"Sorry, no videos for that artist", url:"http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"});
	  } else {

	  var all_vids = json.response.video;
	  var youtube_vids = [];
	  var daily_vids = [];
	  all_vids.forEach(function(video){
	  		if (video['site'] == 'youtube') {
	  			youtube_vids.push(video);
	  		}
	  		if (video['site'] == 'dailymotion') {
	  			daily_vids.push(video);
	  		}
	  });
	  // console.log('TURTLES');
	  // console.log(youtube_vids);
	  // console.log('NOT TURTLES');
	  // console.log(daily_vids);

	  if (youtube_vids.length == 0) {
	  	if (daily_vids.length > 0) {
	  	  youtube_vids = daily_vids;
	  	  var rand = youtube_vids[Math.floor(Math.random() * youtube_vids.length)];
		  var video_url = rand.url;

		  var new_video_url = video_url.slice(33, video_url.length);

		  var video_src = "http://www.dailymotion.com/swf/" + new_video_url + "?autoStart=1";
	  	  res.render('index', {title:'DINOFY!!!', artist:req.body['artist'] + " -- " + rand.title, url:video_src});

	  	} else{
	  		res.render('index', {title:'DINOFY!!!', artist:"Sorry, no Youtube or Dailymotion videos for that artist", url:"http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"});
	  	};
	  } else {
	  	  var rand = youtube_vids[Math.floor(Math.random() * youtube_vids.length)];
		  var video_url = rand.url;

		  var new_video_url = video_url.slice(31, video_url.length);

		  var video_src = "http://www.youtube.com/embed/" + new_video_url + "?autoplay=1"
		  res.render('index', {title:'DINOFY!!!', artist:req.body['artist'] + " -- " + rand.title, url:video_src});
	  };

	}
	  
	});

  //res.send("Your Artist: " + req.body['artist']);
  // res.render('index', {title:'DINOFY!!!', artist:req.body['artist'], url:new_video_url});
};