<template>
  <div>
    <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" v-if="header">
            {{header}}
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-header" v-else>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="items">
            <!-- <component v-for="item in items" :key="item.id" :is="item.type" v-bind="item"/> -->
            <template v-for="(item,index) in items">
              <component
                :key="item.id"
                :is="item.type"
                v-bind="item"
                :item="item"
                v-if=" exists(item.type)"
                v-model="items[index].value"
              ></component>
            </template>
          </div>
          <div class="modal-body" v-if="text">
            <p>{{text}}</p>
          </div>
          <div class="modal-footer">
            <Button @click="execute()" data-dismiss="modal">Ausführen</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Modal.ts"></script>
<style lang="scss" scoped src="./Modal.scss"></style>
