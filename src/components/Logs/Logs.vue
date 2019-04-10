<template>
  <div>
    <div v-if="error">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">ERROR!</h4>
        {{error}}
      </div>
    </div>
    <div v-else>
      <Tabs
        :headers="logsComputed"
        :loadContent="loadContent"
        :component="component"
        :content="content"
      />
    </div>
  </div>
</template>
<script lang="ts" src="./Logs.ts"></script>
<style lang="scss" scoped src="./Logs.scss"></style>