<template>
  <v-overlay
    :value="processLoading"
    opacity=".7"
  >
    <v-dialog
      v-model="processLoading"
      max-width="400"
      persistent
    >
      <v-card
        class="pa-6 text-center loading-analyze"
        elevation="2"
        rounded
      >
        <div
          class="mb-6 title-section"
        >
          <div
            class="mb-4
            avatar-container"
          >
            <v-avatar
              size="80"
              class="mb-3"
              style="background: linear-gradient(135deg, #2196F3 0%, #9C27B0 100%);"
            >
              <v-icon
                v-if="processError"
                color="#fff"
                size="42"
              >
                error
              </v-icon>

              <v-progress-circular
                v-else
                indeterminate
                color="#fff"
                width="2"
              ></v-progress-circular>
            </v-avatar>
          </div>

          <div
            v-if="processError"
          >
            <h2
              class="text-h5 font-weight-bold mb-2 main-title"
              style="color: #1976D2;"
            >
              Erro no processamento
            </h2>
          </div>

          <div
            v-else
          >
            <h2
              class="text-h5 font-weight-bold mb-2 main-title"
              style="color: #1976D2;"
            >
              Processando seu email...
            </h2>

            <p
              class="text-body-2 text--secondary mb-6 subtitle"
            >
              Nossa IA está analisando o conteúdo e gerando insights
            </p>
          </div>
        </div>

        <div
          class="progress-container"
        >
          <div
            class="progress-bar"
          />
        </div>

        <div
          class="text-left process-steps"
        >
          <div
            class="d-flex align-center mb-3 step-item"
          >
            <v-icon
              class="mr-3"
              color="green lighten-1"
            >
              mail
            </v-icon>

            <span
              class="text-body-1 step-text"
            >
              Lendo conteúdo
            </span>
          </div>

          <div
            class="d-flex align-center mb-3 step-item"
          >
            <v-icon
              class="mr-3"
              color="green lighten-1"
            >
              smart_toy
            </v-icon>

            <span
              class="text-body-1 step-text"
            >
              Analisando contexto
            </span>
          </div>

          <div
            v-if="processError"
            class="d-flex align-center step-item"
          >
            <v-icon
              class="mr-3"
              color="error lighten-1"
            >
              error
            </v-icon>

            <span
              class="text-body-1 step-text"
            >
              Erro ao gerar a resposta
            </span>
          </div>

          <div
            v-else
            class="d-flex align-center step-item"
          >
            <v-icon
              class="mr-3"
              color="green lighten-1"
            >
              chat
            </v-icon>

            <span
              class="text-body-1 step-text"
            >
              Gerando resposta
            </span>
          </div>
        </div>

        <div
          v-if="processError"
          class="mt-7"
        >
          <v-btn
            color="primary"
            class="analyze-btn"
            depressed
            @click="processError = false, processLoading = false"
          >
            <span
              class="mr-2"
            >
              Tentar novamente
            </span>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import { MixinControlProcess } from "@/mixins/MixinsControlProcess"
  import "@/styles/components/layout/loading/LoadingAnalyzeComponent.styl"

  @Component({})
  export default class LoadingAnalizerEmail extends mixins(
    MixinControlProcess,
  ) {}
</script>

<style lang="stylus">
  .analyze-btn
    background: linear-gradient(135deg, #1976d2, #7b1fa2)
    border-radius: 12px
    padding: 16px 32px
    font-weight: 600
    text-transform: none
    letter-spacing: 0.5px
</style>
