<template>
  <div>
    <label :for="id">{{label}}</label>
    <select class="form-control" :id="id" @change="updateVal" v-model="selected">
      <option v-for="(el,index) in values" :key="index+'select'">{{el}}</option>
    </select>
  </div>
</template>
<script lang="ts" src="./Select.ts"></script>
<style lang="scss" scoped src="./Forms.scss"></style>