<template>
  <div>
    <nav class="navbar fixed-top">
      <div class="navbar-topbar">
        <select class="custom-select" v-model="current" @change="getSelected()">
          <option selected>Select System</option>
          <option v-for="(data,index) in storageLocal" :key="index" :value="data">{{data.title}}</option>
        </select>
        <button
          type="button"
          class="btn btn-primary modalTrigger"
          data-toggle="modal"
          :data-target="'#'+id"
        >
          <i class="fas fa-plus"></i>
        </button>
        <button type="button" class="btn btn-primary modalTrigger" @click="exportJson">
          <i class="fas fa-download"></i>
        </button>
        <label class="btn btn-primary uploadBtn">
          <i class="fas fa-upload"></i>
          <input type="file" style="display: none;" @change="importJson" ref="myFiles">
        </label>
        <button type="button" class="btn btn-primary" @click="lock" v-if="!locked">
          <i class="fas fa-lock"></i>
        </button>
        <button type="button" class="btn btn-primary" @click="unlock" v-else>
          <i class="fas fa-unlock"></i>
        </button>
      </div>
    </nav>
    <Modal
      :items="agp_add"
      label="exampleModalCentered"
      header="Add System"
      :id="id"
      :handler="addSystem"
    />
  </div>
</template>
<script lang="ts" src="./Base.ts"></script>
<style lang="scss" scoped src="./Base.scss"></style>