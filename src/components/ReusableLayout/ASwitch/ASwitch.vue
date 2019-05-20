<template>
  <label class="form-switch">
    <input type="checkbox" v-model="checkTest" @change="handle">
    {{left}}
    <i></i>
    {{right}}
  </label>
</template>
<script lang="ts" src="./ASwitch.ts">
</script>
<style lang="scss" scoped src="./ASwitch.scss">
</style>
  
