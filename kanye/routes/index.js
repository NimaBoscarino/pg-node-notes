var express = require('express');
var router = express.Router();

const songDb = [
  {
    title: "old macdonald",
    id: 1,
    lyrics: "had a farm!"
  },
  {
    title: "row row row your boat",
    id: 2,
    lyrics: "gently down the stream"
  },
  {
    title: "baa baa black sheep",
    id: 3,
    lyrics: "have you any wool"
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  getSongs((err, songs) => {
    if (err) {
      console.log('ERR:', err)
    } else {
      res.render('index', {
        songs: songs
      })  
    }
  })
});

function getSongs(cb) {
  cb(null, songDb)
}

module.exports = router;
