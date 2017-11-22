<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <form @submit.prevent="addNewPlaylist">
                    <input type="text" placeholder="Playlist Name" v-model="newPlaylist.name">
                    <button class="btn btn-default" type="submit">Create New Playlist</button>
                </form>
            </div>
        </div>
        <div v-for="playlist in playlists" class="row">
            <div class="col-xs-12">
                <button @click="getPlaylist">{{playlist}}</button>
            </div>
        </div>
        <div v-for="song in myTunes" class="row text-center song">
            <div class="col-md-3 col-md-offset-1 col-xs-12">
                <img class="album-art" :src="song.albumArt">
            </div>
            <div class="col-md-6 col-md-offset-2 col-xs-12 text-right">
                <button @click="removeFromPlaylist(song)">Remove From Playlist</button>
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
                newPlaylist:{}
            }
        },
        methods: {
            getPlaylist() {
                this.$store.dispatch('getPlaylist', this.artist)
            },
            addNewPlaylist() {
                debugger
                this.$store.dispatch('addNewPlaylist', this.newPlaylist)
                this.newPlaylist = {}
            },
            removeFromPlaylist(song) {
                this.$store.dispatch('removeSong', song)
            }
        },
        computed: {
            myTunes() {
                return this.$store.state.myTunes
            },
            playlists() {
                return this.$store.state.playlists
            },
            playlist() {
                return this.$store.state.playlist
            }
        },


    }

</script>

<style>
</style>