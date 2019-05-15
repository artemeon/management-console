<template>
  <div class="dashboard">
    <div class="dashboardButtons">
      <button
        type="button"
        class="btn"
        @click="addSystem"
        data-toggle="modal"
        :data-target="'#'+id"
      >
        <i class="fas fa-plus"></i>
        add new
      </button>
      <button type="button" class="btn" @click="exportJson">
        <i class="fas fa-file-upload"></i>
        Export
      </button>
      <label class="btn">
        <input type="file" style="display: none;" @change="importJson" ref="myFiles">
        <i class="fas fa-file-download"></i>
        Import
      </label>
    </div>
    <div class="dashboardCards">
      <!-- @TODO Delete System -->
      <Card
        v-for="(data,index) in storageLocal"
        :key="index"
        :value="data"
        :title="data.title"
        information
        @handleClick="getSelected(data)"
      />
    </div>
    <Modal
      :items="agp_add"
      label="exampleModalCentered"
      header="Add System"
      :id="id"
      :handler="addSystem"
    />
  </div>
</template>
<script lang="ts" src="./Dashboard.ts"></script>
<style lang="scss" scoped src="./Dashboard.scss"></style>