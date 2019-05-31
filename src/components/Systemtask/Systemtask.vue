<template>
  <div class="systemTasksContainer">
    <div v-if="systemTasksComputed.length" class="systemTasksContainer">
      <div class="row">
        <div class="col-sm-1 col-md-3 col-lg-2 col-xl-2">
          <ul class="sidenav">
            <li
              v-for="(task,index) in systemTasksComputed "
              :key="index"
              @click="runtask(task.value[0].key)"
            >{{task.value[0].key}}</li>
          </ul>
        </div>
        <div class="col-sm-11 col-md-9 col-lg-10 col-xl-10"></div>
      </div>
      <!-- <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(task,index) in systemTasksComputed " :key="index">
          <h5>{{task.key}}</h5>

          <div>{{task.value[0].value}}</div>
          <button
            @click="runtask(task.value[0].key)"
            data-toggle="modal"
            :data-target="'#'+task.value[0].key"
          >{{task.value[0].key}}</button>
          <Modal
            :id="task.value[0].key"
            :header="task.value[0].key"
            :items="form.fields"
            v-if="form"
          />
        </li>
      </ul>-->
    </div>
  </div>
</template>
<script lang="ts" src="./Systemtask.ts"></script>
<style lang="scss" scoped src="./Systemtask.scss"></style>
