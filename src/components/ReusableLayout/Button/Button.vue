<template>
  <button type="button" :style="btnStyle" @click="handler" class="btn">
    <slot></slot>
  </button>
</template>
<script lang="ts" src="./Button.ts">
</script>
<style lang="scss" scoped src="./Button.scss">
</style>
  
