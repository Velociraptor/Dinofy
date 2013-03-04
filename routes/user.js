
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
	}, function (err, json) {
	  console.log(json.response);
	  //console.log(json.response.video);
	  var rand = json.response.video[Math.floor(Math.random() * json.response.video.length)];
	  console.log(rand);
	  var video_url = rand.url;
	  console.log(video_url);

	  var new_video_url = video_url.slice(31, video_url.length);
	  console.log(new_video_url);

	  res.render('index', {title:'DINOFY!!!', artist:req.body['artist'], url:new_video_url});

	});

  //res.send("Your Artist: " + req.body['artist']);
  // res.render('index', {title:'DINOFY!!!', artist:req.body['artist'], url:new_video_url});
};