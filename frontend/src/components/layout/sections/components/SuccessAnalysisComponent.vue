<template>
  <div
    style="max-width: 600px;"
    class="mx-auto text-start"
  >
    <v-card
      v-if="getCacheResult() && getCacheResult().category"
      color="#7c3aed08"
      class="pa-4"
      elevation="0"
      style="border-radius: 12px;"
    >
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
        >
          <h2
            v-font-size="20"
            class="font-weight-black"
          >
            Resultado da Análise
          </h2>
        </v-col>

        <v-col
          cols="12"
          class="py-2"
        />

        <v-col
          cols="12"
        >
          <v-row
            v-if="getCacheResult().category === 'Produtivo'"
            no-gutters
            align="center"
          >
            <v-col
              cols="2"
              md="1"
              class="shrink mr-3"
            >
              <div
                class="header-icon"
                style="background: var(--secondary-gradient)"
              >
                <v-icon
                  color="#fff"
                  size="36"
                >
                  check_circle
                </v-icon>
              </div>
            </v-col>

            <v-col
              cols="9"
              class="shrink"
            >
              <v-row
                no-gutters
                style="line-height: 1.3;"
              >
                <v-col
                  cols="12"
                >
                  <h3
                    v-font-size="21"
                    class="font-weight-bold"
                  >
                    {{ getCacheResult().category }}
                  </h3>

                  <span
                    v-font-size="14"
                    style="color: #64748b;"
                  >
                    Este email requer ação ou resposta
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row
            v-if="getCacheResult().category === 'Improdutivo'"
            no-gutters
            align="center"
          >
            <v-col
              cols="2"
              md="1"
              class="shrink mr-3"
            >
              <div
                class="header-icon"
                style="background:#F06292"
              >
                <v-icon
                  outlined
                  size="36"
                  color="#fff"
                >
                  error
                </v-icon>
              </div>
            </v-col>

            <v-col
              cols="9"
              class="shrink"
            >
              <v-row
                no-gutters
                style="line-height: 1.3;"
              >
                <v-col
                  cols="12"
                >
                  <h3
                    v-font-size="21"
                    class="font-weight-bold"
                  >
                    {{ getCacheResult().category }}
                  </h3>

                  <span
                    v-font-size="14"
                    style="color: #64748b;"
                  >
                    Este email pode ser arquivado ou ignorado
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          class="py-4"
        />

        <v-col
          cols="12"
        >
          <v-row
            no-gutters
          >
            <v-col
              cols="12"
            >
              <v-icon
                color="warning"
                size="30"
              >
                mail
              </v-icon>

              <span
                v-font-size="18"
                class="font-weight-bold ml-2"
              >
                Email Recebido
              </span>
            </v-col>

            <v-col
              cols="12"
              class="py-2"
            />

            <v-col
              cols="12"
            >
              <v-card
                style="border-radius: 15px;"
                elevation="0"
                class="pa-2"
              >
                <span
                  v-font-size="14"
                  v-html="getCacheResult().raw_text"
                />

                {{ }}
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          class="py-4"
        />

        <v-col
          cols="12"
        >
          <v-row
            no-gutters
          >
            <v-col
              cols="12"
            >
              <v-icon
                color="#3b82f6"
                size="30"
              >
                chat
              </v-icon>

              <span
                v-font-size="18"
                class="font-weight-bold ml-2"
              >
                Resposta Sugerida
              </span>
            </v-col>

            <v-col
              cols="12"
              class="py-2"
            />

            <v-col
              cols="12"
            >
              <v-card
                style="border-radius: 15px;"
                elevation="0"
                class="pa-2"
              >
                <span
                  v-font-size="14"
                  v-html="getCacheResult().suggested_response"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          class="py-4"
        />

        <v-col
          cols="12"
          class="text-center"
        >
          <v-btn
            rounded
            depressed
            class="text-none"
            dark
            large
            style="background: linear-gradient(135deg, #1976d2, #7b1fa2)"
            @click.stop="redirect()"
          >
            <span>
              Analisar outro e-mail
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"
  import { namespace } from "vuex-class"

  const cacheStore = namespace("cacheStoreModule")

  @Component({})
  export default class SuccessAnalysisComponent extends Vue {
    @cacheStore.Getter("CacheResult") getCacheResult

    redirect (): void {
      this.getCacheResult(null)
      this.$router.replace({ params: { segment: "analise-pendente" } })
    }
  }
</script>

<style lang="stylus">
  .header-icon
    width: 48px
    height: 48px
    border-radius: 12px
    display: flex
    align-items: center
    justify-content: center
    margin-right: 1rem
    flex-shrink: 0
</style>
