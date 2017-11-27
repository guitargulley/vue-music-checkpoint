import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    results: [],
    myTunes: []
  },
  mutations: {

    setResults(state, songList) {
      state.results = songList
    },

    setMyTunes(state, songs) {
      //need to sort this based on ratings
      songs = songs.sort((a, b) => {
        return b.rating - a.rating
      })
      state.myTunes = songs
    }
  },
  actions: {

    // this one works!
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(response => {

        var songList = response.results.map(function (song) {
          return {
            title: song.trackName,
            albumArt: song.artworkUrl60,
            kind: song.kind,
            artist: song.artistName,
            album: song.collectionName,
            price: song.collectionPrice,
            preview: song.previewUrl
          };
        })
        console.log(songList)


        commit('setResults', songList)
      })
    },
   
    getMyTunes({ commit, dispatch }) {
      var url = '//localhost:3000/api/songs'
      console.log('you got here')
      
      $.get(url)
        .then(songs => {
          commit('setMyTunes', songs)
        })
    },

    addToMyTunes({ commit, dispatch }, song) {
      var url = '//localhost:3000/api/songs'
      var newSong = {
        //hardcoding playlist at ths moment
        playListId: '5a15afdeba78f490d1aaed61',
        title: song.title,
        albumArt: song.albumArt,
        artist: song.artist,
        album: song.album,
        preview: song.preview,
        albumPrice: song.albumPrice,
        kind: song.kind,
        rating: song.rating
      }
      $.post(url, newSong)
        .then(res => {
          console.log(res)
          dispatch('getMyTunes')
        })
    },
    removeFromMyTunes({ commit, dispatch }, song){
      var url = '//localhost:3000/api/songs/' + song._id
      $.ajax({
        method: 'DELETE',
        url:url
      })
      .then(res => {
        dispatch('getMyTunes')
      })
    },
    increaseRating({ commit, dispatch }, song){
      console.log(song)
     
     
      var url = '//localhost:3000/api/songs/' + song._id
      $.ajax({
        method: 'PUT',
        contentType: 'application/json',
        url: url,
        data: JSON.stringify(song)
      })
      .then(song => {
        console.log(song)
        dispatch('getMyTunes')
      })
    },
    lowerRating({commit, dispatch}, song){
      var url = '//localhost:3000/api/songs/' + song._id
     
      
      $.ajax({
        method: 'PUT',
        url: url,
        contentType: 'application/json',
        data: JSON.stringify(song)
      })
      .then(res => {
        console.log(song.rating)
        dispatch('getMyTunes')
      })
    } 
  }
})

export default store
