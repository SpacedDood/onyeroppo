<template>
  <div class="main">
    <div class="btn neg">-</div>
    <div class="value">{{ value }}</div>
    <div class="btn pos">+</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value: String,
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
.main {
  display: flex;
  margin: auto;
  width: 200px;
  border: 1px solid black;
  justify-content: center;
  vertical-align: baseline;
}
</style>
