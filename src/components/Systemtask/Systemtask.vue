<template>
  <div>
    <div v-if="systemTasksComputed.length">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(task,index) in systemTasksComputed " :key="index">
          <h5>{{task.key}}</h5>

          <div>{{task.value[0].value}}</div>
          <button @click="runtask(task.value[0].key)">{{task.value[0].key}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" src="./Systemtask.ts"></script>
<style lang="scss" scoped src="./Systemtask.scss"></style>