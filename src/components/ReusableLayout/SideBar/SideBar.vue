<template>
  <div style="height:100%">
    <nav id="sidebar">
      <ul class="list-unstyled labels" v-if="elements && elements[0].key">
        <li v-for="(content,index) in elements  " :key="index" :id="content.key">
          <label>{{content.key}}</label>
          <ul class="list-unstyled sub">
            <li
              class="sideBarActionWithLabels"
              v-for="(task,index) in content.value  "
              :key="index"
              :id="task.key"
              @click="handler(task.key)"
            >
              <span>{{task.key}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="list-unstyled" v-else>
        <li
          class="sideBarActionWithout"
          v-for="(task,index) in elements  "
          :key="index"
          :id="task"
          @click="handler(task)"
        >
          <span>
            <slot name="icon"></slot>
            {{task}}
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts" src="./SideBar.ts"></script>
<style lang="scss" scoped src="./SideBar.scss"></style>