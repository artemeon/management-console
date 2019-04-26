<template>
  <div>
    <label :for="id">{{label}}</label>
    <select class="form-control" :id="id" v-model="selected" @change="updateVal">
      <option v-for="(value,index) in values" :key="index+'select'" :value="value">{{value}}</option>
    </select>
  </div>
</template>
<script lang="ts" src="./Select.ts"></script>
<style lang="scss" scoped src="./Forms.scss"></style>