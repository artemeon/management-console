<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <nav id="sidebar">
      <ul class="list-unstyled components" v-if="content">
        <li class="brand-logo" @click="lock">
          <i class="__brand_img">
            <img :src="require(`@/assets/img/${brand}`)">
            <i class="fas fa-lock" v-if="locked"></i>
            <i class="fas fa-unlock" v-else></i>
          </i>
        </li>
        <li v-for="(content,index) in content  " :key="index">
          <a
            :href="'#submenu'+content.name"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >{{content.name}}</a>
          <ul
            class="collapse list-unstyled"
            :id="'submenu'+content.name"
            v-if="content.children.length"
          >
            <li v-for="(subcontent,index) in content.children  " :key="index ">
              <a @click="handler(subcontent.name)" :id="subcontent.name">{{subcontent.name}}</a>
            </li>
          </ul>
        </li>
      </ul>
      <button type="button" class="btn __dashboard_return" @click="dashboard">
        <i class="fas fa-door-open"></i>
        Dashboard
      </button>
    </nav>
  </div>
</template>
<script lang="ts" src="./SideBar.ts"></script>
<style lang="scss" scoped src="./SideBar.scss"></style>