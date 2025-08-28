<template>
  <header
    elevation="0"
    class="pa-0 ma-0"
  >
    <v-row
      no-gutters
      justify="space-between"
      align="center"
    >
      <v-col
        cols="4"
      >
        <v-card
          :height="$vuetify.breakpoint.smAndDown ? 35 : 52"
          :width="$vuetify.breakpoint.smAndDown ? 40 : 205"
          :style="$vuetify.breakpoint.mdAndUp && `background: var(--primary-gradient);border-radius:25px`"
          elevation="0"
          class="py-1"
        >
          <v-row
            no-gutters
            align="center"
          >
            <v-col
              cols="12"
              md="4"
              class="d-md-flex align-center justify-center"
            >
              <v-icon
                :color="$vuetify.breakpoint.mdAndUp ? 'white' : 'primary'"
                size="40"
              >
                smart_toy
              </v-icon>
            </v-col>

            <v-col
              cols="8"
              class="hidden-sm-and-down pt-1"
            >
              <div
                cols="12"
                style="line-height: 1;"
              >
                <small
                  style="color:#FAFAFA"
                >
                  Análise inteligente<br> de emails com AI
                </small>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col
        cols="6"
      >
        <v-row
          no-gutters
        >
          <v-col
            v-for="({ id, text, icon }) in segments"
            :key="`btn-${id}`"
            class="shrink mx-2"
          >
            <v-btn
              depressed
              class="text-none"
              large
              rounded
              :text="String(id) !== String(segment)"
              :style="String(id) === String(segment) ? `background:var(--primary-gradient);color:#FAFAFA` : `background:var(--glass-bg)`"
              @click="handleSetSegment(id)"
            >
              <v-icon
                size="22"
                class="mr-2"
              >
                {{ icon }}
              </v-icon>

              <span
                class="font-weight-medium"
                v-text="text"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </header>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})
  export default class ToolbarComponent extends mixins() {
    segment = "analisar"

    segments = [
      {
        id: "analisar",
        icon: "mail",
        text: "Analisar"
      },
      {
        id: "historico",
        icon: "history",
        text: "Histórico"
      },
    ]

    handleSetSegment (id: string): void {
      if (this.segment === id) return

      this.segment = id
      this.$router.push({ params: { segment: id } })
    }

    mounted (): void {
      if (!this.$route.params.segment) {
        this.$router.push({ params: { segment: this.segment } })
      }
    }
  }
</script>
