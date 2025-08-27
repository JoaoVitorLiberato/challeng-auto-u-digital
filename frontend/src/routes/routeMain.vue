<template>
  <v-main>
    <v-container
      fluid
    >
      <router-view
        name="viewMain"
      />
    </v-container>
  </v-main>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})

  export default class routeMain extends mixins() {}
</script>
