<template>
  <div>
    <label :for="id">{{label}}</label>
    <select class="form-control" :id="id">
      <option v-for="value in values" :key="value.value" :value="value.value">{{value.value}}</option>
    </select>
    <!-- :disabled="disabled" -->
  </div>
</template>
<script lang="ts" src="./Select.ts"></script>
<style lang="scss" scoped src="./Forms.scss"></style>