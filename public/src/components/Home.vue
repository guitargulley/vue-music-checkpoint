<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row header">
      <div class="col-xs-12 text-center">
        <h1>
          <em>Music</em> is Freedom</h1>
      </div>
    </div>


    <i-tunes class="i-tunes">
    </i-tunes>

    <my-tunes class="my-tunes">

    </my-tunes>
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
    /* min-height: 500px;
    max-width: 50%; */
    background: whitesmoke;
    color: black;
  }

  .i-tunes {
    display: inline-block;
    background: whitesmoke;
    color: black;
    /* min-height: 500px;
    max-width: 45%; */
  }
  .song{
    margin-top: 10px;
    border: 1px solid black;
  }
</style>