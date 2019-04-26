
<template>
  <div>
    <div class="form-check" v-for="(element,index) in values" :key="index+'radio'">
      <input
        class="form-check-input"
        type="radio"
        :name="name"
        :id="element"
        :value="element"
        v-model="checkItem"
        @change="updateVal"
      >
      <label class="form-check-label" :for="element">{{element}}</label>
    </div>
  </div>
</template>
<script lang="ts" src="./Radio.ts"></script>
<style lang="scss" scoped src="../Forms.scss"></style>