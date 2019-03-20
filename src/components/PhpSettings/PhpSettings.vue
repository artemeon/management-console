<template>
  <div id="phpSettingsContainer">
    <h4 v-html="$t('message.  installer_phpcheck_intro')"></h4>
    <p v-html="$t('message. installer_phpcheck_lang')"></p>
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang"
        selected="lang===de"
      >{{ lang }}</Option>
    </select>
    <p v-html="$t('message.installer_phpcheck_intro2')"></p>
    <!-- <div>{{$t('message.installer_phpcheck_intro2 ')}}</div> -->
    <div class="tbl-content">
      <table>
        <tbody>
          <tr>
            <td>
              <p v-html="$t('message.installer_phpcheck_version')"></p>
              <span class="label-success label-as-badge label">{{phpSettings.minPhpVersion}}</span>
            </td>
          </tr>
          <tr v-for="(phpFile,index) in fileChecksFolder  " :key="index + '-file'">
            <td>
              <p class="content">{{$t('message.installer_phpcheck_folder ')}} {{phpFile.key}}</p>
              <span
                v-if="phpFile.value===true"
                v-html="$t('message.installer_given')"
                class="label-success label-as-badge label"
              ></span>
              <span
                v-else
                v-html="$t('message.installer_missing')"
                class="label-danger label-as-badge label"
              ></span>
            </td>
          </tr>
          <tr v-for="(phpModule,index) in fileChecksModules " :key="index + '-module'">
            <td>
              <p class="content">{{$t('message.installer_phpcheck_module ')}}{{phpModule.key}}</p>
              <span
                v-if="phpModule.value===true"
                v-html="$t('message.installer_loaded')"
                class="label-success label-as-badge label"
              ></span>
              <span
                v-else
                v-html="$t('message.installer_nloaded')"
                class="label-danger label-as-badge label"
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts" src="./PhpSettings.ts"></script>
<style lang="scss" scoped src="./PhpSettings.scss"></style>