<template>
  <div>
    <h5>Installation Container</h5>
    <!-- temporary -->
    <!-- <Base/> -->
    <div class="row">
      <div class="col-md-3">
        <!-- <Base/> -->
        <v-stepper vertical v-model="activeStep" non-linear>
          <v-stepper-step
            step="1"
            color="#00b0ff"
            :complete="activeStep>1"
          >{{$t("message.installer_step_phpsettings")}}</v-stepper-step>
          <v-stepper-content step="1"></v-stepper-content>
          <v-stepper-step
            step="2"
            color="#00b0ff"
            :complete="activeStep>2"
          >{{$t("message.installer_step_dbsettings")}}</v-stepper-step>
          <v-stepper-content step="2"></v-stepper-content>
          <v-stepper-step
            step="3"
            color="#00b0ff"
            :complete="activeStep>3"
          >{{$t("message.installer_step_adminsettings")}}</v-stepper-step>
          <v-stepper-content step="3"></v-stepper-content>
          <v-stepper-step
            step="4"
            color="#00b0ff"
            :complete="activeStep>4"
          >{{$t("message.installer_step_autoinstall")}}</v-stepper-step>
          <v-stepper-content step="4"></v-stepper-content>
          <v-stepper-step step="5" :complete="activeStep>5" color="#00b0ff">Finish</v-stepper-step>
          <v-stepper-content step="5"></v-stepper-content>
        </v-stepper>
      </div>
      <div class="col-md-8">
        <PHPSettings v-if="activeStep===1"/>
        <DbSettings v-if="activeStep===2"/>
        <AdminLogin v-if="activeStep===3"/>
        <InstallPackages v-if="activeStep===4"/>
        <Finish v-if="activeStep===5"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Installation.ts"></script>
<style lang="scss" scoped src="./Installation.scss"></style>