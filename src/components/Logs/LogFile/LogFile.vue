<template>
  <div v-if="content">
    <div
      class="list-group"
      v-for="(el,i) in content.lines"
      :key="i"
      v-bind:class="[{truncate: i!==selected },'alert',warning(el)]"
      @click="showItem(i)"
    >
      <p>{{el}}</p>
    </div>
  </div>
</template>
<script lang="ts" src="./LogFile.ts"></script>
<style lang="scss" scoped src="./LogFile.scss"></style>