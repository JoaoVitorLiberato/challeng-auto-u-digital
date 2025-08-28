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
        v-font-size="46"
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
        v-font-size="20"
        class="grey--text font-weight-regular"
      >
        Descubra se seus emails são produtivos e receba<br> sugestões de resposta automatizadas
      </p>
    </v-col>

    <v-col
      cols="12"
      class="py-2"
    />

    <v-col
      cols="12"
    >
      <InputFileComponent></InputFileComponent>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({
    components: {
      InputFileComponent: () => import (
        /* webpackChuckName: "input-file-component" */
        /* webpackMode: "eager" */
        "@/components/input/InputFileComponent.vue"
      )
    }
  })
  export default class AnalizerEmailSectionComponent extends mixins() {}
</script>
