
<template>
  <div>
    <nav class="navbar fixed-top">
      <div class="navbar-topbar">
        <select class="custom-select" v-model="current" @change="getSelected()">
          <option selected>Select System</option>
          <option v-for="(data,index) in storageLocal" :key="index" :value="data">{{data.title}}</option>
        </select>
        <!-- <Modal/> -->
        <button
          type="button"
          class="btn btn-primary modalTrigger"
          data-toggle="modal"
          :data-target="'#'+id"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </nav>
    <Modal :items="items" label="exampleModalCentered" header="Add System" :id="id"/>
  </div>
</template>
<script lang="ts" src="./Base.ts"></script>
<style lang="scss" scoped src="./Base.scss"></style>