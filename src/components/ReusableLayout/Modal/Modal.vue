<template>
  <div>
    <div
      class="modal"
      :id="id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" v-if="header">{{header}}</div>
          <div class="modal-body">
            <!-- <component v-for="item in items" :key="item.id" :is="item.type" v-bind="item"/> -->
            <template v-for="(item,index) in items">
              <component
                :key="item.id"
                :is="item.type"
                v-bind="item"
                v-if=" exists(item.type)"
                v-model="items[index].value"
              ></component>
            </template>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Schließen</button>
            <button type="button" class="btn btn-primary" @click="execute()">Ausführen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Modal.ts"></script>
<style lang="scss" scoped src="./Modal.scss"></style>