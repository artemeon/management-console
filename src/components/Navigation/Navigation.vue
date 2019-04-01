<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3">
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
      </div>
      <div class="col-lg-9">
        <div v-if="!selected">Select</div>
        <div v-else :key="selected.name">
          <PhpSettings
            v-if="selected.vueInformations.component==='PhpSettings' "
            :url="selected.vueInformations.url"
          />
          <DbSettings
            v-else-if="selected.vueInformations.component==='DbSettings' "
            :url="selected.vueInformations.url"
          />
          <Installer
            v-else-if="selected.vueInformations.component==='Install'"
            :url="selected.vueInformations.url"
          />
          <Logs
            v-else-if="selected.vueInformations.component==='Logs'"
            :url="selected.vueInformations.url"
          />
          <DbBrowser
            v-else-if="selected.vueInformations.component==='Dbbrowser'"
            :url="selected.vueInformations.url"
          />
          <div v-else>coming soon</div>
        </div>
      </div>

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
            <v-btn color="primary" @click="saveToLocalStorage()">Speichern</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script lang="ts" src="./Navigation.ts"></script>
<style lang="scss" scoped src="./Navigation.scss"></style>