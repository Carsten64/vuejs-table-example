<script lang="ts" src="./Header.script.ts">
</script>
<style lang="less" src="./Header.style.less"></style>
<template>
    <thead class="header-component">
        <tr>
            <th v-for="item in labels" :key="item.id" v-on:click="changeOrdering(item)" >
                {{item.label}}
                <i v-bind:class="changeClass(item)"/>
            </th>
        </tr>
    </thead>
</template>