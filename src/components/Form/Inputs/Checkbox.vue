<template>
  <div>
    <label for="form-check">{{label}}</label>
    <div class="form-check" v-for="element in values" :key="element">
      <input
        class="form-check-input"
        type="checkbox"
        :value="element"
        :id="element"
        v-model="checkItem"
        @change="updateVal"
      >
      <label class="form-check-label" :for="element">{{element}}</label>
    </div>
  </div>
</template>
<script lang="ts" src="./Checkbox.ts"></script>
<style lang="scss" scoped src="../Forms.scss"></style>

