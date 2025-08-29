<template>
  <v-container
    fluid
    class="pa-0 mx-auto"
    style="width: 100%;max-width: 500px;"
  >
    <v-card
      elevation="0"
    >
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
        >
          <v-row
            no-gutters
            align="center"
          >
            <v-col
              cols="2"
              md="1"
              class="shrink mr-md-3"
            >
              <div
                class="header-icon"
              >
                <span
                  class="icon-text font-weight-black white--text"
                >
                  T
                </span>
              </div>
            </v-col>

            <v-col
              cols="10"
              md="9"
              class="shrink text-start"
            >
              <h4
                v-font-size="16"
                class="font-weight-medium"
              >
                Digite o conteúdo do email
              </h4>

              <p
                v-font-size="12"
                class="grey--text pa-0 ma-0"
              >
                Cole ou digite o texto do email para análise
              </p>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          class="py-2"
        />

        <v-col
          cols="12"
        >
          <v-textarea
            v-model="input_text_data"
            placeholder="Cole aqui o conteúdo do email que você deseja analisar..."
            outlined
            auto-grow
            rows="8"
            counter
            persistent-hint
            hint="Mínimo 20 caracteres para análise"
            :rules="[v => v && v.length >= 20 || 'Mínimo 20 caracteres necessários']"
          />
        </v-col>

        <v-col
          cols="12"
          class="py-3"
        />

        <v-col
          cols="12"
        >
          <v-btn
            color="primary"
            class="analyze-btn"
            x-large
            :disabled="input_text_data.length < 20"
            depressed
            @click.stop="handleSetEmailTextService()"
          >
            <span
              class="mr-2"
            >
              Analisar Email
            </span>

            <v-icon
              size="30"
            >
              arrow_right_alt
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  import { MixinHandleChangeInput } from "@/mixins/MixinHandleChangeInput"

  @Component({})
  export default class InputTextAreaComponent extends mixins(
    MixinHandleChangeInput,
  ) {}
</script>

<style lang="stylus">
  .header-icon
    width: 48px
    height: 48px
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
    border-radius: 12px
    display: flex
    align-items: center
    justify-content: center
    margin-right: 1rem
    flex-shrink: 0
  .analyze-btn
    background: linear-gradient(135deg, #1976d2, #7b1fa2)
    border-radius: 12px
    padding: 16px 32px
    font-weight: 600
    text-transform: none
    letter-spacing: 0.5px
</style>
