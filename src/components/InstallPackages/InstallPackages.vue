<template>
  <div id="installPackagesContainer">
    <div>
      <div class="alert alert-success">
        <h4 id="statusintro">{{ $t("message.installer_start_installation_hint")}}</h4>
        <!-- <p id="statusinfo" class="hidden"><i class="fa fa-spinner fa-spin"></i> {{ "installer_start_statusinfo_intro" }} <span id="statuscurmodule"></span></p> -->
        <button
          html_type="submit"
          @click="startInstaller"
          class="btn savechanges"
        >{{ $t("message.installer_start_installation") }}</button>
      </div>
    </div>
    <table class="table table-striped" v-if="!wait">
      <tr>
        <th>{{ $t("message.installer_package_title")}}</th>
        <th>{{ $t("message.installer_package_version") }}</th>
        <th>{{ $t("message.installer_package_installation") }}</th>
        <th>{{ $t("message.installer_package_samplecontent") }}</th>
        <th>{{ $t("message.installer_package_hint") }}</th>
      </tr>

      <tr v-for="(data,index) in packages" :key="index+ '-module'">
        <td>{{data.title}}</td>
        <td>{{data.versionInstalled}}</td>
        <!-- if can be installed or is installed -->
        <td v-if="data.providesInstaller">
          <i v-if="data.versionInstalled!==null" class="fas fa-check"></i>
          <i v-else class="far fa-hourglass"></i>
        </td>
        <td v-else>
          <Icon type="md-checkmark"/>
        </td>
        <td v-if="!Array.isArray(data.samplecontent) ">
          <i v-if=" data.samplecontent.isInstalled" class="fas fa-check"></i>
          <i v-else class="far fa-hourglass"></i>
        </td>
        <td v-else></td>
        <td
          v-if="data.versionInstalled===null && data.providesInstaller===false "
        >{{$t("message.installer_package_hint_noinstaller")}}</td>
        <td v-else></td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" src="./InstallPackages.ts"></script>
<style lang="scss" scoped src="./InstallPackages.scss"></style>