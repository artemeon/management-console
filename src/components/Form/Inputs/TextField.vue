<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <input
      type="text"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :mandatory="mandatory"
      v-model="inputText"
      @change="updateVal"
    />
    <!-- :disabled="disabled" -->
  </div>
</template>
<script lang="ts" src="./TextField.ts"></script>
<style lang="scss" scoped src="../Forms.scss"></style>