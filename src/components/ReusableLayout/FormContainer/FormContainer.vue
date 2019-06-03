<template>
  <div class="formContainer">
    <div :id="id" v-if="items">
      <div class="top-slot">
        <slot name="btn-top"></slot>
      </div>
      <template v-for="(item,index) in items">
        <component
          :key="item.id"
          :is="item.type"
          v-bind="item"
          :item="item"
          v-if=" exists(item.type)"
          v-model="items[index].value"
        ></component>
      </template>
      <slot name="btn-bottom"></slot>
    </div>
  </div>
</template>
<script lang="ts" src="./FormContainer.ts"></script>
<style lang="scss" scoped src="./FormContainer.scss"></style>