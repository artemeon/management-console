<template>
  <div id="tabs" class="container">
    <div class="tabs">
      <a
        v-for="(data,index) in headers"
        :key="index"
        @click="handler(data,index)"
        :class="[ activetab === index ? 'active' : '' ]"
      >{{data}}</a>
    </div>
    <div class="tabcontent">
      <component :is="component" :content="content" v-if="component && content"></component>
    </div>
  </div>
</template>
<script lang="ts" src="./Tabs.ts"></script>
<style lang="scss" scoped src="./Tabs.scss"></style>