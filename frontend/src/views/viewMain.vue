<template>
  <v-container
    fluid
    class="pa-0 mt-5"
  >
    <v-row
      no-gutters
    >
      <v-col
        cols="12"
      >
        <AnalizerEmailSectionComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({
    components: {
      AnalizerEmailSectionComponent: () => import(
        /* webpackChuckName: "toolbar-component" */
        /* webpackMode: "eager" */
        "@/components/layout/sections/AnalizerEmailSectionComponent.vue"
      )
    }
  })
  export default class viewMain extends mixins() {}
</script>
