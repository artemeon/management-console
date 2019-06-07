<template>
  <div class="card" :style="cardStyle" @click="handler" v-if="clickable">
    <div class="card-body">
      <div class="header">
        <p class="custom-header">
          <slot name="custom-header">
            <h5 class="card-title">{{title}}</h5>
            <i class="fas fa-times" @click="handleClose" v-if="close"></i>
          </slot>
        </p>
      </div>

      <p class="card-text">
        <slot name="card-text"></slot>
      </p>
      <slot name="action-buttons"></slot>
    </div>
  </div>
  <div class="card" :style="cardStyle" v-else>
    <div class="card-body">
      <div class="header">
        <p class="custom-header">
          <slot name="custom-header">
            <h5 class="card-title">{{title}}</h5>
            <i class="fas fa-times" @click="handleClose" v-if="close"></i>
          </slot>
        </p>
      </div>
      <p class="card-text">
        <slot name="card-text"></slot>
      </p>
      <slot name="action-buttons"></slot>
    </div>
  </div>
</template>
<script lang="ts" src="./Card.ts"></script>
<style lang="scss" scoped src="./Card.scss"></style>
