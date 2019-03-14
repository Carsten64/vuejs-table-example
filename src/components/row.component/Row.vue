<script lang="ts" src="./Row.script.ts">
</script>
<style lang="less" src="./Row.style.less"></style>
<template>
    <tbody>
        <tr v-for="country in countries" :key="country.name" >
            <td><img src="../../assets/styles/blank.gif" v-bind:class="getFlagIcon(country)" />{{country.name}}</td>
            <td>{{country.totalNumberOfMedals}}</td>
            <td>{{country.goldMedals}}</td>
            <td>{{country.silverMedals}}</td>
            <td>{{country.bronzeMedals}}</td>
            <td class="action">
                <div class="icono-trash" v-on:click="deleteContry(country)"/>
                <div class="icono-gear" v-on:click="modify(country)"/>
            </td>
        </tr>
    </tbody>
</template>
