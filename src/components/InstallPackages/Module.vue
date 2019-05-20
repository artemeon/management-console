<template>
  <div v-if="packagesError">ERROR COMING SOON</div>
  <div id="installPackagesContainer " v-else>
    <!-- <div class="d-flex justify-content-center">
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
    </div>-->
    <br>

    <div v-if="!showUpdateBtn()" class="floatRight">
      <ASwitch
        right="Das ganze System installieren"
        left="System ohne Beispielinhalte"
        @change="handle()"
      />
      <br>
      <Button @click="startInstaller">
        <i class="fas fa-download"></i>
        {{ $t("message.installer_start_installation") }}
      </Button>
    </div>
    <div v-else class="floatRight">
      <Button @click="update">
        <i class="fas fa-download"></i> Update
      </Button>
    </div>
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>{{ $t("message.installer_package_title")}}</TableCell>
            <TableCell>{{ $t("message.installer_package_version") }}</TableCell>
            <TableCell>{{ $t("message.installer_package_samplecontent") }}</TableCell>
            <TableCell>{{ $t("message.installer_package_hint") }}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody :style="style">
          <TableRow v-for="(data,index) in modules()" :key="index">
            <TableCell v-if="data.providesInstaller">
              <i
                v-if="data.versionInstalled!==null && data.versionInstalled!==data.versionAvailable"
                class="fas fa-download"
              ></i>
              <i
                v-else-if="data.versionInstalled!==null && data.versionInstalled===data.versionAvailable"
                class="fas fa-check-circle"
              ></i>
              <i v-else class="far fa-hourglass"></i>
            </TableCell>
            <TableCell v-else>
              <i class="fas fa-check-circle"></i>
            </TableCell>
            <TableCell>{{data.title}}</TableCell>
            <TableCell>{{data.versionInstalled}}</TableCell>

            <TableCell v-if="hasSampleContent(data)">
              <i v-if=" hasSampleContent(data).isInstalled" class="fas fa-check"></i>
              <i v-else class="far fa-hourglass"></i>
            </TableCell>
            <TableCell v-else></TableCell>
            <TableCell
              v-if="data.versionInstalled===null && data.providesInstaller===false "
            >{{$t("message.installer_package_hint_noinstaller")}}</TableCell>
            <TableCell v-else>
              <span class="badge badge-warning" v-if="informations(data.requires).length">requires:</span>
              <div v-for="(data,index) in informations(data.requires)" :key="index+ '-requires'">
                <span>{{data.key}}: {{data.value}}</span>
              </div>
              <span class="badge badge-warning">Version Available:</span>
              <div>{{data.versionAvailable}}</div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  </div>
</template>
<script lang="ts" src="./Module.ts"></script>
<style lang="scss" scoped src="./Module.scss"></style>