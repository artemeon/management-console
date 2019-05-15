<template>
  <div class="card" :style="cardStyle" @click="handler">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">
        <slot></slot>
      </p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>
<script lang="ts" src="./Card.ts"></script>
<style lang="scss" scoped src="./Card.scss"></style>