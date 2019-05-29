<template>
  <div>
    <LogFile :content="content"/>
    <div v-if="error">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">ERROR!</h4>
        {{error}}
      </div>
    </div>

    <div v-else class="logFilesContainer">
      <!-- <Tabs
        :headers="logsComputed"
        :loadContent="loadContent"
        :component="component"
        :content="content"
      />-->
      <Card
        v-for="(data,index) in logsComputed"
        :key="index"
        :value="data"
        :title="data"
        :clickable="true"
        :close="false"
        @handleClick="showLog(data)"
      >
        <template v-slot:custom-header>
          <i class="far fa-file-code"></i>
        </template>
        <template v-slot:card-text>
          <span>{{data}}.php</span>
        </template>
      </Card>
    </div>
  </div>
</template>
<script lang="ts" src="./Logs.ts"></script>
<style lang="scss" scoped src="./Logs.scss"></style>