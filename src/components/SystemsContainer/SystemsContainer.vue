
<template>
  <div class="parent">
    <div class="content">
      <div class="col-sm-1 col-md-3 col-lg-2 col-xl-2">
        <SideNav :content="content"/>
      </div>
      <div class="col-sm-11 col-md-9 col-lg-10 col-xl-10">
        <router-view></router-view>
      </div>
    </div>
    <StatusBar/>
  </div>
</template>
<script lang="ts" src="./SystemsContainer.ts"></script>
<style lang="scss" src="./SystemsContainer.scss"></style>