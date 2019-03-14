<script lang="ts" src="./Medal-table.script.ts">
</script>
<style lang="less" src="./Medal-table.style.less"></style>
<template>
  <div class="medal-table-component">
    <h2 class="medal-table-title">{{title}}</h2>
    <table class="medal-table">
      <Header v-bind:labels="columnLabel"></Header>
      <Row v-bind:countries="countries"/>
    </table>
    <div class="icono-plus" title="adding an country" v-on:click="addCountry"></div>
  </div>
</template>
