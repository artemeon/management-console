
<template>
  <div>
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <SideBar :content="content"/>
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9">
        <router-view></router-view>
        <!-- <StatusBar/> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./SystemsContainer.ts"></script>
<style lang="scss" src="./SystemsContainer.scss"></style>