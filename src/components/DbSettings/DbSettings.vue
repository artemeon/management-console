<template>
  <div>
    <h5>DbSettings</h5>
    <!-- <div v-html="$t('message.installer_dbdriver_na') +'  ' +dbDriver" v-if="checkModule===false"></div>
    <label for="dbServer">DB Server</label>
    <input v-model="dbServer" clearable id="dbServer">
    <label for="dbUser">DB User</label>
    <input v-model="dbUser" clearable id="dbUser">
    <label for="dbPassword">DB Password</label>
    <input v-model="dbPassword" type="password" clearable id="dbPassword">
    <label for="dbName">DB Name</label>
    <input v-model="dbName" clearable id="dbName">
    <label for="dbDriver">DB Driver</label>
    <select v-model="dbDriver" placeholder="Driver" @on-change="switchDriver">
      <option value="mysqli">MySQL</option>
      <option value="mysqli">MariaDB</option>
      <option value="postgres">PostgreSQL</option>
      <option value="sqlite3">SQLite 3</option>
      <option value="oci8">Oracle (oci8)</option>
      <option value="sqlsrv">MSSQL(sqlsrv)</option>
    </select>
    <button
      html_type="submit"
      class="btn savechanges"
      @click="postDbsettings"
    >{{$t('message.installer_config_write')}}</button>-->
    <!-- ************************************** -->
    <form>
      <v-text-field
        v-model="dbServer"
        v-validate="'required'"
        label="dbServer"
        data-vv-name="dbServer"
        required
      ></v-text-field>
      <v-text-field
        v-model="dbUser"
        v-validate="'required'"
        label="dbUser"
        data-vv-name="dbUser"
        required
      ></v-text-field>
      <v-text-field
        v-model="dbPassword"
        :type="password"
        label="password"
        data-vv-name="password"
        required
      ></v-text-field>
      <v-text-field v-model="dbName" label="name" data-vv-name="name" required></v-text-field>
      <v-select :items="drivers" label="Driver" outline></v-select>
      <v-btn @click="submit">In config.php speichern</v-btn>
    </form>
  </div>
</template>
<script lang="ts" src="./DbSettings.ts"></script>
<style lang="scss" scoped src="./DbSettings.scss"></style>