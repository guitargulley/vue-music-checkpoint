<template>
    <div>
        <div class="row">
            <div class="col-md-12 text-center playlist">
                <h1> MY PLAYLIST </h1>
            </div>
        </div>
       
        <div class="row text-center ">
                <div v-for="song in myTunes" class="col-md-4 col-md-offset-1 song">
                    
                    <h4>Rating: {{song.rating}}</h4>
                    <i class="glyphicon glyphicon-chevron-up" @click="increaseRating(song)"></i>
                    <button class="btn btn-danger" @click="removeFromPlaylist(song)">Delete</button>
                    <i class="glyphicon glyphicon-chevron-down" @click="lowerRating(song)"></i><br>
                    <img class="album-art" :src="song.albumArt"><br>
                    <audio controls class="audio">
                        <source :src="song.preview" type="audio/mpeg">
                        </audio>
                        <h2>{{song.title}}</h2>
                        <h3>{{song.artist}}</h3>
                        <h4>{{song.album}}</h4>
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
        mounted(){
            this.$store.dispatch('getMyTunes')
        } ,
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