
<template>
  <nav class="navbar fixed-top">
    <div class="navbar-topbar">
      <select class="custom-select" v-model="current" @change="getSelected()">
        <option selected>Select System</option>
        <option v-for="(data,index) in storageLocal" :key="index" :value="data">{{data.title}}</option>
      </select>
    </div>
  </nav>
</template>
<script lang="ts" src="./Base.ts"></script>
<style lang="scss" scoped src="./Base.scss"></style>