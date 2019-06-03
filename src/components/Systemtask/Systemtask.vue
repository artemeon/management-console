<template>
  <div class="systemTasksContainer">
    <div v-if="systemTasksComputed.length" class="systemTasksContainer">
      <div class="wrapper">
        <SideBar :elements="systemTasksComputed" @indexClicked="selectTask"/>

        <FormContainer :items="form.fields[0].fields" v-if="form && form.fields">
          <template v-slot:btn-bottom>
            <Button @click="runTask">Run task</Button>
          </template>
        </FormContainer>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Systemtask.ts"></script>
<style lang="scss" scoped src="./Systemtask.scss"></style>
