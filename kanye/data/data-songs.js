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

function makeSongsData() {
  
    function getSongById(id, cb) {
        let foundSong = songDb.filter(song => song.id == id)[0];
        cb(null, foundSong)
    }


    function getSongs(cb) {
        cb(null, songDb)
    }
  
    return {
        getSongById,
        getSongs
    };
}

module.exports = makeSongsData;