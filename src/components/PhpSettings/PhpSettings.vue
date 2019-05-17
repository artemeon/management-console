<template>
  <div id="phpSettingsContainer">
    <div v-if="phpSettings==='error'">ERROR</div>
    <div v-else>
      <p>{{$t('message.installer_phpcheck_version')}} : {{phpVersion}}</p>
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-md-12 col-xs-12">
          <Card :title="$t('message.installer_phpcheck_folder ')">
            <table class="table table-striped" :styles="style">
              <tr v-for="(phpFile,index) in fileChecksFolder  " :key="index + '-file'">
                <td class="content">{{phpFile.key}}</td>

                <td>
                  <i v-if="phpFile.value===true" class="fas fa-check text-success"></i>
                  <i v-else class="fas fa-times text-danger"></i>
                </td>
                <td></td>
              </tr>
            </table>
          </Card>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-12 col-xs-12">
          <Card :title="$t('message.installer_phpcheck_module')" :styles="style">
            <table class="table table-striped">
              <tr v-for="(phpModule,index) in fileChecksModules " :key="index + '-module'">
                <td class="content">{{phpModule.key}}</td>
                <td></td>
                <td>
                  <i v-if="phpModule.value===true" class="fas fa-check text-success"></i>
                  <i v-else class="fas fa-times text-danger"></i>
                </td>
              </tr>
            </table>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./PhpSettings.ts"></script>
<style lang="scss" scoped src="./PhpSettings.scss"></style>
