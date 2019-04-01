
<template>
  <div id="app">
    <v-app>
      <nav class="navbar fixed-top">
        <div class="navbar-topbar"></div>
      </nav>

      <Navigation></Navigation>

      <router-view></router-view>

      <!-- <div id="appViews"></div> -->
    </v-app>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
