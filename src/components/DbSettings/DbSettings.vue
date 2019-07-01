<template>
  <div>
    <form @submit="postDbsettings" class="form-horizontal col-sm-10">
      <button
        type="button"
        class="btn btn-outline-danger"
        v-if="disable"
        @click="enable"
      >Change Settings</button>
      <fieldset :disabled="disable">
        <!-- dbServer -->
        <div class="form-group">
          <label
            for="hostname"
            class="col-sm-5 control-label"
          >{{$t('message.installer_config_dbhostname')}}</label>
          <div class="col-sm-6">
            <input
              type="text"
              id="hostname"
              name="hostname"
              class="form-control"
              v-model="dbServer"
            />
          </div>
        </div>
        <!-- dbUser -->
        <div class="form-group">
          <label
            for="username"
            class="col-sm-5 control-label"
          >{{$t('message.installer_config_dbusername')}}</label>
          <div class="col-sm-6">
            <input type="text" id="username" name="username" class="form-control" v-model="dbUser" />
          </div>
        </div>
        <!-- dbPsw -->
        <div class="form-group">
          <label
            for="password"
            class="col-sm-5 control-label"
          >{{$t('message.installer_config_dbpassword')}}</label>
          <div class="col-sm-6">
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              v-model="dbPassword"
            />
          </div>
        </div>
        <!-- dbName -->
        <div class="form-group">
          <label
            for="dbname"
            class="col-sm-5 control-label"
          >{{$t('message.installer_config_dbname')}}</label>
          <div class="col-sm-6">
            <input type="text" id="dbname" name="dbname" class="form-control" v-model="dbName" />
          </div>
        </div>
        <div class="form-group">
          <label
            for="driver"
            class="col-sm-5 control-label"
          >{{$t('message.installer_config_dbdriver')}}</label>
          <div class="col-sm-6">
            <select
              name="driver"
              id="driver"
              class="form-control"
              v-model="dbDriver"
              @change="switchDriver()"
            >
              <option value="mysqli" selected="selected">MySQL</option>
              <option value="mysqli">MariaDB</option>
              <option value="pgsql">PostgreSQL</option>
              <option value="sqlite3">SQLite 3</option>
              <option value="oci8">Oracle (oci8)</option>
              <option value="sqlsrv">MSSQL(sqlsrv)</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="port" class="col-sm-5">{{$t('message.installer_config_dbport')}}</label>
          <div class="col-sm-6">
            <input type="text" id="port" name="port" class="form-control" v-model="dbPort" />
          </div>
          <div class="col-sm-6">
            <span class="alert-info">{{$t('message.installer_config_dbportinfo')}}</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-5"></label>
          <div class="col-sm-6">
            <button type="submit" class="btn savechanges">{{$t('message.installer_config_write')}}</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script lang="ts" src="./DbSettings.ts"></script>
<style lang="scss" scoped src="./DbSettings.scss"></style>