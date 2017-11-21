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
    <!-- <my-tunes class="my-tunes"> -->

    <!-- </my-tunes> -->
  </div>
</template>

<script>
  import ITunes from './ITunes'
  // import MyTunes from './MyTunes'
  export default {
    components: {
      ITunes,
      // MyTunes
    }
  }
</script>


<style>
</style>