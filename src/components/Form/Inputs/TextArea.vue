<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <textarea
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :mandatory="mandatory"
      v-model="inputText"
      @change="updateVal"
    >
    <!-- :disabled="disabled" -->
  </div>
</template>
<script lang="ts" src="./TextArea.ts"></script>
<style lang="scss"  src="../Forms.scss"></style>
