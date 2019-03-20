
<template>
  <div>
    <form @submit="handleSubmit">
      <!-- <input type="hidden" name="write" value="true"> -->
      <label for="username">{{$t('message.installer_login_username')}}</label>
      <input html-type="text" v-model="userName" id="username">
      
      <label for="password">{{$t('message.installer_login_password')}}</label>
      
      <input type="password" id="password" v-model="password">
      
      <label for="email">{{$t('message.installer_login_email')}}</label>
      
      <input type="text" id="email" v-model="email">
      
      <button html-type="submit" class="btn savechanges">
        <span class="btn-text">{{$t("message.installer_login_save") }}</span>
        <span class="statusicon"></span>
      </button>
    </form>
  </div>
</template>
<script lang="ts" src="./AdminLogin.ts"></script>
<style lang="scss" src="./AdminLogin.scss"></style>