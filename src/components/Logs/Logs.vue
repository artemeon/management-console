<template>
  <div>
    <div v-if="error">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">ERROR!</h4>
        {{error}}
      </div>
    </div>
    <div v-else>
      <div v-if="loading===true">
        <div class="spinner-grow text-info" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-else>
        <div class="list-group" v-for="(data,index) in Object.keys(logs)" :key="index+ '-log'">
          <h5>{{data}}</h5>
          <div class="list-group" v-for="(el,i) in logs[data]" :key="i">
            <p
              v-bind:class="[{truncate: i!==selected },'alert',warning(el)]"
              @click="showItem(i)"
            >{{el}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Logs.ts"></script>
<style lang="scss" scoped src="./Logs.scss"></style>