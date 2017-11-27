<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <button class="btn btn-default" @click="getPlaylist">View Playlist</button>
            </div>
        </div>
        <div v-for="song in myTunes" class="row text-center song">
            <div class="col-md-3 col-md-offset-1 col-xs-12">
                <img class="album-art" :src="song.albumArt">
            </div>
            <div class="col-md-6 col-md-offset-2 col-xs-12 text-right">
                <h5>Rating: {{song.rating}}</h5>
                <i class="glyphicon glyphicon-chevron-up" @click="increaseRating(song)"></i>
                <button class="btn btn-default" @click="removeFromPlaylist(song)">Delete</button>
                <i class="glyphicon glyphicon-chevron-down" @click="lowerRating(song)"></i>
                <h2>{{song.title}}</h2>
                <h3>{{song.artist}}</h3>
                <h4>{{song.album}}</h4>
                <audio controls class="audio">
                    <source :src="song.preview" type="audio/ogg">
                    <source :src="song.preview" type="audio/mpeg">
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MyTunes',
        data() {
            return {
                newPlaylist: {},
                selectedPlaylist: {},
            }
        },
        methods: {
            //this one works
            getPlaylist() {
                // this.selectedPlaylist = {}
                this.$store.dispatch('getMyTunes')
            },


            removeFromPlaylist(song) {
                this.$store.dispatch('removeFromMyTunes', song)
            },
            increaseRating(song) {
                song.rating++
                this.$store.dispatch('increaseRating', song)
            },
            lowerRating(song) {
                if (song.rating != 0) {
                    song.rating--
                }
                this.$store.dispatch('lowerRating', song)
            }
        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            }
        },


    }

</script>

<style>
</style>