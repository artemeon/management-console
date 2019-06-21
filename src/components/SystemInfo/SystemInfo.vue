<template>
  <div v-if="loading">Loading...</div>
  <div v-else class="scrollContainer">
    <div v-for="(data,index) in systemInfo" :key="index+ '-info'">
      <legend>{{data.title}}</legend>
      <table class="table table-striped">
        <tbody>
          <tr v-for="(field,index) in data.fields" :key="index+ '-field'">
            <td v-for="(column,index) in field" :key="index+ '-col'">
              <div v-if="typeof(column)!=='object'">{{column}}</div>
              <div v-else-if="column!==null && column.type">
                <ChartJs
                  v-bind:chartData="column.data"
                  :id="column.type+data.title"
                  :height="column.height"
                />
              </div>
              <div v-else></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" src="./SystemInfo.ts"></script>
<style lang="scss" scoped src="./SystemInfo.scss"></style>