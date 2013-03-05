
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'DINOFY!!!', artist: 'Search for your Favorite Artist', url:"http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"});
};