<template>
  <div id="app">
    <HelloWorld msg="On yer Oppo!" />
    <!--<PlayerCounter value="4" />-->
    <MainTable numberPlayers="4" />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import PlayerCounter from './components/PlayerCounter.vue';
import MainTable from './components/MainTable.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MainTable,
    PlayerCounter,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
