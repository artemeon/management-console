<template>
  <div v-if="dbTables">
    <div v-if="'tables' in dbTables">
      <div class="row">
        <div id="dbTablesContainer" class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div
            v-for="(table, index) in dbTables.tables"
            :key="index"
            class="dbTable"
            @click="setSelectedTable(table)"
          >
            <p>{{table}}</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <h1 v-if="selectedTable===''">Wählen Sie eine Tablelle aus</h1>
          <h1 v-else>Tabelle : {{selectedTable}}</h1>
          <div v-if="tableData">
            <h1>Spalten</h1>

            <table class="dbBrowserTable table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Datentyp intern</th>
                  <th>Datentyp DB</th>
                  <th>Null</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(column, index) in tableData.columns" :key="index">
                  <td>
                    <i class="fa fa-columns" aria-hidden="true"></i>
                    {{column.name}}
                    <i
                      v-if="column.name === tableData.keys[0]"
                      class="fa fa-key"
                      aria-hidden="true"
                    ></i>
                  </td>
                  <td>{{column.type}}</td>
                  <td>{{column.dbtype}}</td>
                  <td>{{column.nullable}}</td>
                  <td v-if="!isIndex(column.name)" @click="addIndex(column.name)">
                    <i class="fa fa-bolt" aria-hidden="true"></i>
                  </td>
                  <td v-else></td>
                </tr>
              </tbody>
            </table>
            <h1>Primary Keys</h1>

            <table class="dbBrowserTable table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(primaryKey, index) in tableData.keys" :key="index">
                  <td>{{primaryKey}}</td>
                </tr>
              </tbody>
            </table>
            <h1>Indexes</h1>

            <table class="dbBrowserTable table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Beschreibung</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(dbIndex, index) in tableData.indexes" :key="index">
                  <td>{{dbIndex.name}}</td>
                  <td>{{dbIndex.description}}</td>
                  <td>
                    <span @click="deleteIndex(dbIndex)">
                      <i class="fas fa-trash-alt" aria-hidden="true"></i>
                    </span>
                    <span @click="recreateIndex(dbIndex)">
                      <i class="fas fa-sync" aria-hidden="true"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DbBrowser.ts">
</script>
<style lang="scss" scoped src="./DbBrowser.scss">
</style>
