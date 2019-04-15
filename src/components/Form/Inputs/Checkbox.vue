<template>
  <div>
    <div class="form-check" v-for="value in values" :key="value.value">
      <input class="form-check-input" type="checkbox" value="value.value" id="defaultCheck1">
      <label class="form-check-label" for="value.value">{{value.value}}</label>
    </div>
  </div>
</template>
<script lang="ts" src="./Checkbox.ts"></script>
<style lang="scss" scoped src="../Forms.scss"></style>

