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

      <loading-analyze-component />
    </v-container>
  </v-main>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import { namespace } from "vuex-class"

  const cacheStore = namespace("cacheStoreModule")

  @Component({
    components: {
      ToolbarComponent: () => import (
        /* webpackChuckName: "toolbar-component" */
        /* webpackMode: "eager" */
        "@/components/layout/ToolbarComponent.vue"
      ),
      LoadingAnalyzeComponent: () => import (
        /* webpackChuckName: "loading-analyzer-component" */
        /* webpackMode: "eager" */
        "@/components/layout/loading/LoadingAnalyzeComponent.vue"
      )
    }
  })

  export default class routeMain extends mixins() {
    beforeRouteEnter (
      to: {
        name: string;
        params: {
          segment: string;
        }
      },
      _from: never,
      next: (arg0: (vm) => void) => void,
    ): void {
      next((vm) => {
        try {
          if (
            !to.params ||
            !("segment" in to.params) ||
            ![ "analise-sucesso", "analise-pendente" ].includes(String(to.params.segment)) ||
            (to.params.segment === "analise-sucesso") && !vm.getCacheResult().category
          ) throw new Error("RETORNAR HOME")
        } catch {
          vm.$router.replace({ params: { segment: "analise-pendente" } })
        }
      })
    }

    @cacheStore.Getter("CacheResult") getCacheResult
  }
</script>
