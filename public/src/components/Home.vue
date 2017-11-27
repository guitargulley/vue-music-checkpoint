<template>
  <div class="home">
    <div class="container">
      <div class="row header">
        <div class="col-xs-12 text-center">
          <h1>
            <em>Music</em> is Freedom</h1>
        </div>
      </div>
      
      <div class="row">
        <my-tunes class="my-tunes col-md-12">
        </my-tunes>
      <div class="row">
        <i-tunes class="i-tunes col-md-12">
        </i-tunes>
      </div>
      </div>

    </div>
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
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
  body{
    height: 100%;
    background-image: url("../assets/music-background.jpg");
    background-attachment: fixed;
    background-size: cover;
    }
  .header h1{
    font-size: 100px;
    color: rgb(179, 162, 162);
    text-shadow: 5px 5px 15px whitesmoke

  }
  .my-tunes {
    display: inline-block;
  }

  .i-tunes {
    display: inline-block;

  }
  .selection-area h1{
    font-size: 60px;
    color: whitesmoke;
    text-shadow: 3px 3px 30px rgba(216, 84, 199, 0.7490196078431373);
  }
  .playlist h1{
    font-size: 60px;
    color: whitesmoke;
    text-shadow: 3px 3px 30px rgba(216, 84, 199, 0.7490196078431373);
  }
  .song {
    padding-top: 70px;
    margin-top: 10px;
    min-height: 600px;
    min-width: 450px;
    border: 10px ridge grey;
    border-radius: 2px;
    color:whitesmoke;
    background-color: rgba(46, 10, 75, 0.274); 
    box-shadow: 0px 0px 50px rgba(216, 84, 199, 0.7490196078431373);
  }
  .song:hover{
    box-shadow: 0px 0px 150px white;
  }
  .song img{
    width: 200px;
    padding: 5px;
  }
  .song i{
    font-size: 30px;
    padding: 10px;
  }
  .song i:hover{
    text-shadow: 0px 0px 100px white;
  }
</style>