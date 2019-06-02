<template>
  <div class="systemTasksContainer">
    <div v-if="systemTasksComputed.length" class="systemTasksContainer">
      <div class="wrapper">
        <SideBar :elements="systemTasksComputed" @indexClicked="selectTask"/>

        <FormContainer :items="form.fields" v-if="form">
          <template v-slot:btn-top>
            <Button @click="runTask">Run task</Button>
          </template>
        </FormContainer>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Systemtask.ts"></script>
<style lang="scss" scoped src="./Systemtask.scss"></style>
