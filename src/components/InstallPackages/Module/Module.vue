<template>
  <div v-if="packagesError">ERROR COMING SOON</div>
  <div id="installPackagesContainer " v-else>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-outline-info" @click="showAll()">All</button>
      <button
        type="button"
        class="btn btn-outline-info"
        @click="showNotInstalled()"
      >Nicht Installiert</button>
      <button type="button" class="btn btn-outline-info" @click="showInstalled()">Installiert</button>
      <button
        type="button"
        class="btn btn-outline-info"
        @click="showWithSampleContent()"
      >Mit samplecontent</button>
      <button type="button" class="btn btn-outline-info" @click="showHasUpdate ()">Mit Update</button>
    </div>
    <br>
    <button
      html_type="submit"
      @click="startInstaller"
      class="btn savechanges btn-outline-info"
    >{{ $t("message.installer_start_installation") }}</button>
    <table>
      <tr>
        <th>{{ $t("message.installer_package_title")}}</th>
        <th>{{ $t("message.installer_package_version") }}</th>
        <th>{{ $t("message.installer_package_installation") }}</th>
        <th>{{ $t("message.installer_package_samplecontent") }}</th>
        <th>{{ $t("message.installer_package_hint") }}</th>
      </tr>
      <tr v-for="(data,index) in modules()" :key="index+ '-module'">
        <td>{{data.title}}</td>
        <td>{{data.versionInstalled}}</td>
        <!-- if can be installed or is installed -->
        <td v-if="data.providesInstaller">
          <i v-if="data.versionInstalled!==null" class="fas fa-check"></i>
          <i v-else class="far fa-hourglass"></i>
        </td>
        <td v-else>
          <i class="fas fa-check"></i>
        </td>

        <td v-if="hasSampleContent(data)">
          <i v-if=" hasSampleContent(data).isInstalled" class="fas fa-check"></i>
          <i v-else class="far fa-hourglass"></i>
        </td>
        <td v-else></td>
        <td
          v-if="data.versionInstalled===null && data.providesInstaller===false "
        >{{$t("message.installer_package_hint_noinstaller")}}</td>
        <td v-else>
          <span class="badge badge-warning">requires:</span>
          <div v-for="(data,index) in informations(data.requires)" :key="index+ '-requires'">
            <span>{{data.key}}: {{data.value}}</span>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" src="./Module.ts"></script>
<style lang="scss" scoped src="./Module.scss"></style>