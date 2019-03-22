
<template>
  <v-app>
    <div id="app">
      <div id="bg"></div>
      <Navigation></Navigation>
      <!-- <Base/> -->
      <!-- <div class="col-md-8 container-fluid"> -->
      <div>
        <router-view></router-view>
      </div>
      <!-- <div id="appViews"></div> -->
    </div>
  </v-app>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
