<template>
  <v-row
    no-gutters
    class="text-center"
  >
    <v-col
      cols="12"
    >
      <v-btn
        class="text-none mx-1"
        depressed
        rounded
        width="140"
        x-large
        :style="typeSendAnalyzer === 'upload' ? 'background: linear-gradient(135deg, #1976d2, #7b1fa2)' : 'background:transparent'"
        @click="typeSendAnalyzer = `upload`"
      >
        <span
          :class="typeSendAnalyzer === 'upload' ? `white--text` : 'black--text'"
        >
          Upload
        </span>
      </v-btn>

      <v-btn
        class="text-none mx-1"
        depressed
        rounded
        width="140"
        x-large
        :style="typeSendAnalyzer === 'text' ? 'background: linear-gradient(135deg, #1976d2, #7b1fa2)' : 'background:transparent'"
        @click="typeSendAnalyzer = `text`"
      >
        <span
          :class="typeSendAnalyzer === 'text' ? `white--text` : 'black--text'"
        >
          Texto
        </span>
      </v-btn>
    </v-col>

    <v-col
      cols="12"
      class="py-5 py-md-2"
    />

    <v-col
      cols="12"
    >
      <v-slide-y-transition
        mode="out-in"
        class="py-0"
      >
        <div
          :key="`type-${typeSendAnalyzer}`"
        >
          <InputFileComponent
            v-if="typeSendAnalyzer === 'upload'"
          />

          <InputTextAreaComponent
            v-else-if="typeSendAnalyzer === 'text'"
          />
        </div>
      </v-slide-y-transition>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import { MixinHandleChangeInput } from "@/mixins/MixinHandleChangeInput"

  @Component({
    components: {
      InputFileComponent: () => import (
        /* webpackChuckName: "input-file-component" */
        /* webpackMode: "eager" */
        "@/components/inputs/InputFileComponent.vue"
      ),
      InputTextAreaComponent: () => import (
        /* webpackChuckName: "input-text-area-component" */
        /* webpackMode: "eager" */
        "@/components/inputs/InputTextAreaComponent.vue"
      ),
    }
  })
  export default class AnalizerEmailComponent extends mixins(
    MixinHandleChangeInput
  ) {}
</script>
