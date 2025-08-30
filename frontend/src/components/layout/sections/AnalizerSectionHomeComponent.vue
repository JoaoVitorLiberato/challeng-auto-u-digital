<template>
  <v-row
    no-gutters
    class="text-center"
  >
    <v-col
      cols="12"
      class="my-5"
    />

    <v-col
      cols="12"
    >
      <v-btn
        depressed
        rounded
        large
        class="text-none"
        style="background: var(--primary-gradient);"
        dark
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="mr-2"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </svg>

        <span>
          Powered by AI
        </span>
      </v-btn>
    </v-col>

    <v-col
      cols="12"
      class="py-3"
    />

    <v-col
      cols="12"
    >
      <h1
        v-font-size="$vuetify.breakpoint.smAndDown ?  34 : 46"
        style="color:#7c3aed"
        class="font-weight-bold"
      >
        Análise Inteligente de Emails
      </h1>
    </v-col>

    <v-col
      cols="12"
      class="py-1"
    />

    <v-col
      cols="12"
    >
      <p
        v-font-size="$vuetify.breakpoint.smAndDown ? 16 : 20"
        class="grey--text font-weight-regular"
      >
        Descubra se seus emails são produtivos e receba<br class="hidden-sm-and-down"> sugestões de resposta automatizadas
      </p>
    </v-col>

    <v-col
      cols="12"
      class="py-2 py-md-6"
    />

    <v-col
      cols="12"
    >
      <v-slide-x-transition
        mode="out-in"
        class="py-0"
      >
        <div
          :key="`type-${$route.params.segment}`"
        >
          <AnalizerEmailComponent
            v-if="/^(analise-pendente)$/i.test(String($route.params.segment))"
          />

          <SuccessAnalysisComponent
            v-if="/^(analise-sucesso)$/i.test(String($route.params.segment))"
          />
        </div>
      </v-slide-x-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"

  @Component({
    components: {
      AnalizerEmailComponent: () => import (
        /* webpackChuckName: "analizer-email-component" */
        /* webpackMode: "eager" */
        "@/components/layout/sections/components/AnalizerEmailComponent.vue"
      ),
      SuccessAnalysisComponent: () => import (
        /* webpackChuckName: "success-analysis-component" */
        /* webpackMode: "eager" */
        "@/components/layout/sections/components/SuccessAnalysisComponent.vue"
      )
    }
  })
  export default class AnalizerSectionHomeComponent extends Vue {}
</script>
