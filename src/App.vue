<style lang="css" src="./assets/styles/flags.min.css"></style>
<style lang="css" src="./assets/styles/icono.min.css"></style>
<template>
  <div id="app">
    <MedalTable title="Results from last Olympic Winter Games 2018"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import MedalTable from './components/Medal-table.vue';

export default Vue.extend({
  name: 'app',
  components: {
    MedalTable,
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
