import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    results: [],
    myTunes: [],
    playlists:[]
  },
  mutations: {
    setResults(state, results){
      state.results = results
    },
    setPlaylists(state, playlists ){
      state.playlists = playlists
    },
    setPlaylist(state, playlist){
      state.playlists[playlist] = playlist
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
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

    getPlaylists({commit, dispatch}, playlists){
      var url= '//localhost:3000/api/playlists'
      //this should send a get request to your server to return the list of saved tunes
      $.get(url)
        .then(playlists => {
          commit('setPlaylists', playlists)          
        })
    },

    getPlaylist({commit, dispatch,}, playlist){
      var url = '//localhost:3000/api/playlists/:id'
      $.get(url).then(playlist => {
        commit('setPlaylist', playlist)
      })    
    },
    addNewPlaylist({commit, dispatch}, newPlaylist){
      var url = '//localhost:3000/api/playlists'
      $.post(url).then(res => {
        dispatch('getPlaylists')
      })
    },
    addToPlaylist({commit, dispatch}, song){
      var url = '//localhost:3000/api/myTunes'
      $.post(url).then(res => 
        dispatch('getPlaylist'))
        
      //this will post to your server adding a new track to your tunes
    },
    removeSong({commit, dispatch}, song){
      var url = '//localhost:3000/api/myTunes/:id'
      //Removes track from the database with delete
      $.ajax({
        method: 'DELETE',
        url: url
      }).then(res => dispatch('getPlaylist'))
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
