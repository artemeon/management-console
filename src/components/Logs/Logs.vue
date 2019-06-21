<template>
  <!-- <div class="wrapper"> -->
  <div v-if="error">
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">ERROR!</h4>
      {{error}}
    </div>
  </div>

  <div v-else class="logFilesContainer">
    <SideBar :elements="logsComputed" v-if="logsComputed" @indexClicked="showLog">
      <template v-slot:icon>
        <i class="far fa-file-code"></i>
      </template>
    </SideBar>
    <LogFile :content="content" ref="logfile" v-if="selected!==-1" @return="handleReturn"/>
  </div>
  <!-- </div> -->
</template>
<script lang="ts" src="./Logs.ts"></script>
<style lang="scss" scoped src="./Logs.scss"></style>