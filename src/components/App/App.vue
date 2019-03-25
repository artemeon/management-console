
<template>
  <div id="app">
    <v-app>
      <div id="bg"></div>
      <Navigation></Navigation>
      <!-- <Base/> -->
      <!-- <div class="col-md-8 container-fluid"> -->
      <div>
        <router-view></router-view>
      </div>
      <!-- <div id="appViews"></div> -->
    </v-app>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
