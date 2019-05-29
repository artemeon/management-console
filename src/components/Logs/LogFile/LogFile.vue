<template>
  <div v-if="content" id="overlay" :class="{active:isActive}">
    <div id="click" @click="close"></div>
    <Card id="overlayContent" :close="false">
      <template v-slot:card-text>
        <ul>
          <li class="list-group" v-for="(el,i) in content.lines" :key="i" @click="showItem(i)">
            <!--  v-bind:class="[{truncate: i!==selected },'alert',warning(el)]" -->
            <p>{{el}}</p>
          </li>
        </ul>
      </template>
    </Card>
  </div>
</template>
<script lang="ts" src="./LogFile.ts"></script>
<style lang="scss" scoped src="./LogFile.scss"></style>