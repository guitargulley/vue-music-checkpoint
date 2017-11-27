<template>
    <div>
        <div class="container">

            <div class="row">
                <div class="col-xs-12 text-center selection-area">
                    <form @submit.prevent="getMusicByArtist" class="form-inline">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="artist" placeholder="Artist's Name">
                            <button type="submit" class="btn btn-default" id="get-music-button">Get Records</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row text-center ">
                <div v-for="song in results" class="col-md-4 col-md-offset-1 song">
                    <h4>{{song.price}}</h4>
                    <i class="glyphicon glyphicon-plus pull-right" @click="addToMyTunes(song)"></i>
                    <audio controls class="audio">
                        <source :src="song.preview" type="audio/mpeg">
                    </audio>
                    <h2>{{song.title}}</h2>
                    <h3>{{song.artist}}</h3>
                    <h4>{{song.album}}</h4>
                    <img class="album-art" :src="song.albumArt">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ITunes',
        data() {
            return {
                artist: ''
            }
        },
        methods: {
            getMusicByArtist(artist) {
                debugger
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToMyTunes(song) {
                console.log('you got here')
                console.log(this.$store.state.myTunes)
                
                this.$store.dispatch('addToMyTunes', song)

            }
        },
        computed: {
            results() {
                return this.$store.state.results
            }
        },


    }
</script>

<style>
</style>