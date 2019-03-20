<template>
  <div>
    <v-treeview
      :items="items"
      item-key="name"
      item-text="id"
      open-on-click
      :active.sync="active"
      active-class="primary--text"
      activatable
      transition
      :open.sync="open"
    >
      <template v-slot:prepend="{ item, active }">
        <v-icon :color="active?'primary':''" light>mdi-account</v-icon>
      </template>
    </v-treeview>
    <v-scroll-y-transition mode="out-in">
      <div
        v-if="!selected"
        class="title grey--text text--lighten-1 font-weight-light"
        style="align-self: center;"
      >Select</div>
      <v-card v-else :key="selected.id" class="pt-4 mx-auto" flat max-width="400">
        <v-card-text>
          <h3 class="headline mb-2">{{ selected.name }}</h3>
        </v-card-text>
      </v-card>
    </v-scroll-y-transition>

    <!-- <v-btn absolute dark fab bottom left color="blue" @click="openModal()">
      <v-icon>add</v-icon>
    </v-btn>-->
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="blue" dark v-on="on" absolute fab bottom left>
          <v-icon>add</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Title*" required v-model="title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="URL*" required v-model="url"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Token*" required v-model="token"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="saveToLocalStorage()">Speichern</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script lang="ts" src="./Navigation.ts"></script>
<style lang="scss" scoped src="./Navigation.scss"></style>