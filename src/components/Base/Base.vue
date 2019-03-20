
<template>
  <div>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/phpSettings">{{$t("message.installer_step_phpsettings")}}</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dbSettings">{{$t("message.installer_step_dbsettings")}}</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/adminLogin">{{$t("message.installer_step_adminsettings")}}</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/installPackages">{{$t("message.installer_step_autoinstall")}}</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/updatePackages">update</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/finish">Finish</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./Base.ts"></script>
<style lang="scss" scoped src="./Base.scss"></style>