<template>
  <v-main
    style="width:100%;max-width: 1100px;"
    class="mx-auto"
  >
    <v-container
      fluid
    >
      <ToolbarComponent />

      <router-view
        name="viewMain"
      />
    </v-container>
  </v-main>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({
    components: {
      ToolbarComponent: () => import (
        /* webpackChuckName: "toolbar-component" */
        /* webpackMode: "eager" */
        "@/components/layout/ToolbarComponent.vue"
      )
    }
  })

  export default class routeMain extends mixins() {}
</script>
