<template>
  <!-- <nav class="navbar navbar-expand-lg sticky-top bg-dark fixed-top">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/Installation">Installation</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Management">Management</router-link>
          </li>
        </ul>
      </div>
  </nav>-->
  <div>
    <v-treeview
      v-model="tree"
      :open.sync="open"
      :items="items"
      activatable
      item-key="name"
      open-on-click
      transition
    >
      <template v-slot:prepend="{ item }">
        <v-icon v-if="!item.children">mdi-account</v-icon>
      </template>
    </v-treeview>
  </div>
</template>
<script lang="ts" src="./Navigation.ts"></script>
<style lang="scss" scoped src="./Navigation.scss"></style>