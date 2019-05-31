<template>
  <div class="wrapper">
    <nav id="sidebar">
      <ul class="list-unstyled labels" v-if="elements">
        <li v-for="(content,index) in elements  " :key="index" :id="content.key">
          <label>{{content.key}}</label>
          <ul class="list-unstyled sub">
            <li
              class="sideBarAction"
              v-for="(task,index) in content.value  "
              :key="index"
              :id="task.key"
              @click="handler(task.key)"
            >{{task.key}}</li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts" src="./SideBar.ts"></script>
<style lang="scss" scoped src="./SideBar.scss"></style>