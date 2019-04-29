<template>
  <div :class="expandClass">
    <div class="spinnerCustom" v-if="loading"></div>
    <div class="navbar-bottombar">
      <!-- <div class="spinner-border text-primary" role="status" v-if="loading">
        <span class="sr-only">Loading...</span>
      </div>-->

      <div class="action" @click="expand()" v-if="!expanded">
        <i class="fas fa-angle-double-up"></i>
      </div>
      <div class="action" @click="expand()" v-else>
        <i class="fas fa-angle-double-down"></i>
      </div>
      <div>{{information}}</div>
    </div>
    <div v-if="expanded">
      <div class="logs" v-for="(log,index) in installerLog " :key="index + '-log'">
        <small>{{log}}</small>
        <br>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./StatusBar.ts"></script>
<style lang="scss" scoped src="./StatusBar.scss"></style>