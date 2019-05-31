<template>
  <div v-if="content" :class="{active:isActive}">
    <Button @click="close">Return</Button>
    <ul v-if="content.length && content.length>0" class="logs">
      <li
        class="list-group"
        v-for="(el,i) in content"
        :class="warning(el)"
        :key="i"
        @click="showItem(i)"
      >
        <p :class="{truncate: i!==selected }">
          <i v-html="getIcon(el) "></i>
          <span>{{el}}</span>
        </p>
      </li>
    </ul>
    <div v-else>Waiting ...</div>
  </div>
</template>
<script lang="ts" src="./LogFile.ts"></script>
<style lang="scss" scoped src="./LogFile.scss"></style>