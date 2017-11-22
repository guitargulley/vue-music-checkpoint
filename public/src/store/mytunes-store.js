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
    setPlaylist(state, res){
      state.playlists[playlist] = res
    },
    addNewPlaylist(state, playlist){
      state.playlists.push(playlist)
      console.log(state.playlists)
    }
  },
  actions: {

    // this one works!
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
      console.log('you got here')
      //this should send a get request to your server to return the list of saved tunes
      $.get(url)
        .then(playlists => {
          commit('setPlaylists', playlists)          
        })
    },

    getPlaylist({commit, dispatch,}, playlist){
      var url = '//localhost:3000/api/playlists/:id'
      $.get(url).then(res => {
        commit('setPlaylist', playlist)
      })    
    },


    //THIS ONE MOSTLY WORKS!!!!!!!
    addNewPlaylist({commit, dispatch}, newPlaylist){
      var url = '//localhost:3000/api/playlists'
      // var data = {
      //   name: newPlaylist.name
      // }
      console.log('data', newPlaylist)
      $.post(url, newPlaylist).then(playlist => {
        // dispatch('getPlaylists')
        console.log(playlist)
        commit('addNewPlaylist', playlist)
        // dispatch('getPlayLists')
      })
    },
    addToPlaylist({commit, dispatch}, song){
      var url = '//localhost:3000/api/myTunes'
      $.post(url, song).then(res => 
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
