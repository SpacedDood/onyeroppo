<template>
  <div class="hello">
    <h1>{{ prefix + ' ' + msg }}</h1>
    <h2>What is this?</h2>
    <p class="info">This is for a friendly family card game of... 🦆 you. This game requires a point sheet to tally the scores and calls. </p>
    <p onclick="alert('💩💩💩💩💩💩💩💩💩💩')"><b><u>How to play</b></u></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      prefix: 'Well...',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.info {
  max-width: 600px;
  margin: auto;
  padding: 0 40px;
}
</style>
