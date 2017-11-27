<template>
  <div class="home container">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row header">
      <div class="col-xs-12 text-center">
        <h1>
          <em>Music</em> is Freedom</h1>
      </div>
    </div>

    <div class="row">
      <i-tunes class="i-tunes col-xs-6">
      </i-tunes>
    </div>
    <div class="row">
      <my-tunes class="my-tunes col-xs-6">
      </my-tunes>
    </div>
  </div>
</template>

<script>
  import ITunes from './ITunes'
  import MyTunes from './MyTunes'

  export default {
    components: {
      ITunes,
      MyTunes
    }
  }
</script>


<style>
  .my-tunes {
    display: inline-block;

    background: whitesmoke;
    color: black;
  }

  .i-tunes {
    display: inline-block;
    background: whitesmoke;
    color: black;

  }

  .song {
    margin-top: 10px;
    border: 1px solid black;
  }
</style>