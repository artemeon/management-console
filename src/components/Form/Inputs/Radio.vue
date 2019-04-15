
<template>
  <div>
    <div class="form-check" v-for="value in values" :key="value.value">
      <input class="form-check-input" type="radio" name="id" id="value.value" value="value.value">
      <label class="form-check-label" for="value.value">{{value.value}}</label>
    </div>
  </div>
</template>
<script lang="ts" src="./Radio.ts"></script>
<style lang="scss" scoped src="../Forms.scss"></style>