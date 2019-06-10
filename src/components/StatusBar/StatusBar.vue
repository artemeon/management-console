<template>
  <div class="status-bar">
    <div class="logger" v-if="show">
      <div class="logger-header">
        <div class="icon">
          <i class="fas fa-desktop"></i>
        </div>
        <div class="title">Protokolle</div>
        <div class="icon action" @click="toggleShow">
          <span class="icon-content">
            <i class="fas fa-times"></i>
          </span>
        </div>
      </div>
      <div class="logger-content">
        <div class="empty" v-if="!installerLog || installerLog && installerLog.length===0">
          <div>
            <i class="far fa-frown"></i>
          </div>
          <span>{{empty}}</span>
        </div>
        <div v-else>
          <div v-for="(item,index) in installerLog" :key="index">
            <div class="logger-message">
              <div class="logger-icon">
                <i class="far fa-clock"></i>
              </div>
              <div class="message">{{item}}</div>
              <!-- <div class="date">{{new Date().toLocaleString()}}</div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="status-bar-content">
      <div class="section current-system" v-if="system && system!=='undefined'">
        <i class="fas fa-folder"></i>
        <span class="text">{{system}}</span>
      </div>
      <div class="section last-log" @click="toggleShow">
        <i class="fas fa-desktop"></i>
        <span class="text" v-if="!installerLog || installerLog && installerLog.length===0">{{empty}}</span>
        <span class="text" v-else>{{installerLog[installerLog.length-1]}}</span>
      </div>
      <div class="section dark-light">
        <i class="fas fa-adjust"></i>
      </div>
      <div class="section spinner" v-if="loading">
        <!-- <i class="far fa-clock"></i> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./StatusBar.ts"></script>
<style lang="scss" scoped src="./StatusBar.scss"></style>