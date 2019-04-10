<template>
  <div>
    <nav class="navbar fixedbottom">
      <div class="navbar-bottombar" v-if="loading">
        <div class="spinner-border text-danger" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts" src="./StatusBar.ts"></script>
<style lang="scss" scoped src="./StatusBar.scss"></style>