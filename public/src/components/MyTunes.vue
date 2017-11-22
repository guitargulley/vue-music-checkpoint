<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <button class="btn btn-default" @click="getPlaylists" v-model="playlists">Show Playlists</button>
                <form @submit.prevent="addNewPlaylist">
                    <input type="text" placeholder="Playlist Name" v-model="newPlaylist.name">
                    <button class="btn btn-default" type="submit">Create New Playlist</button>
                </form>
            </div>
        </div>
        <!-- <div v-for="playlist in playlists" class="row">
            <div class="col-xs-12">
                <button @click="getPlaylist">{{playlist.name}}</button>
            </div>
        </div> -->
        <div class="row">
            <div class="col-xs-12">
                <form @submit.prevent="setActivePlaylist">
                    <select @change="setActivePlaylist" v-model="selectedPlaylist">
                        <option :value="playlist" v-for="playlist in playlists">{{playlist.name}}</option>
                    </select>
                </form>
            </div>
        </div>
        <div v-for="song in activePlaylist" class="row text-center song">
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
                newPlaylist: {},
                selectedPlaylist:{},
            }
        },
        methods: {
            //this one works
            getPlaylists(){
                // this.selectedPlaylist = {}
                this.$store.dispatch('getPlaylists')
            },
            //this one works
            setActivePlaylist() {
                debugger
                console.log(this.selectedPlaylist)
                this.$store.dispatch('changeActivePlaylist', this.selectedPlaylist)
                // this.selectedPlaylist = {}
                console.log(this.selectedPlaylist)
            },

            //THIS ONE MOSTLY WORKS!!!!!!!
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
            activePlaylist() {
                return this.$store.state.activePlaylist
            }
        },


    }

</script>

<style>
</style>