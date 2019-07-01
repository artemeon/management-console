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
        <input type="file" style="display: none;" @change="importJson" ref="myFiles" />
        <i class="fas fa-file-download"></i>
        Import
      </label>
    </div>
    <div>
      <div v-if="storageLocal && storageLocal.length>0" class="dashboardCards">
        <Card
          v-for="(data,index) in storageLocal"
          :key="index"
          :value="data"
          :title="data.title"
          information
        >
          <template v-slot:custom-header>
            <h5 class="card-title">{{data.title}}</h5>
            <div data-toggle="modal" :data-target="'#'+updateId" @click="setUpdate(data)">
              <i class="fas fa-edit"></i>
            </div>
            <div data-toggle="modal" :data-target="'#'+openDialog" @click="setDelete(data)">
              <i class="fas fa-times"></i>
            </div>
          </template>
          <template v-slot:card-text>
            <span>Title: {{data.title}}</span>
            <br />
            <span>Url: {{data.url}}</span>
          </template>
          <template v-slot:action-buttons>
            <Button @click="getSelected(data)">Management</Button>
            <Button @click="goToAgp(data)">AGP</Button>
          </template>
        </Card>
      </div>
      <div v-else class="empty-handle">
        <div class="icon-empty">
          <i class="fas fa-wifi"></i>
        </div>
        <h5>{{$t('custom.dashboard_leer')}}</h5>
      </div>
    </div>
    <Modal
      :items="agpAdd"
      label="exampleModalCentered"
      header="Add System"
      :id="id"
      :handler="addSystem"
    />
    <Modal
      :items="agpAdd"
      label="exampleModalCentered"
      header="Update System"
      :id="updateId"
      :handler="updateSystem"
    />
    <Modal
      label="exampleModalCentered"
      :id="openDialog"
      :text="deleteDialog"
      :handler="deleteSystem"
    />
  </div>
</template>
<script lang="ts" src="./Dashboard.ts"></script>
<style lang="scss" scoped src="./Dashboard.scss"></style>
