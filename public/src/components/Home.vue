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
  .home{
    background-color:black;
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

  .song {
    padding-top: 70px;
    margin-top: 10px;
    min-height: 600px;
    min-width: 450px;
    border: 10px ridge grey;
    border-radius: 2px;
    background-color: rgb(179, 162, 162);
    color:black;
  }
  .song:hover{
    box-shadow: 0px 0px 40px whitesmoke;
  }
  .song img{
    width: 200px;
  }
  .song i{
    font-size: 30px;
  }
  .song i:hover{
    text-shadow: 0px 0px 10px white
  }
</style>