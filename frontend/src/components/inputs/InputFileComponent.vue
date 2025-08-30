<template>
  <v-container
    fluid
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        md="8"
        lg="6"
      >
        <div
          class="file-upload-zone"
        >
          <input
            ref="fileInput"
            type="file"
            accept=".txt,.pdf"
            @change="handleFileInput"
            class="hidden-input"
          />

          <transition
            name="fade"
            mode="out-in"
          >
            <v-card
              class="upload-area"
              width="100%"
              @click="$refs.fileInput.click()"
              @drop.prevent="handleDrop"
              @dragover.prevent="handleDragOver"
              @dragenter.prevent="handleDragEnter"
              @dragleave.prevent="handleDragLeave"
              elevation="0"
              outlined
            >
              <v-card-text
                class="text-center pa-12"
              >
                <div
                  class="upload-content"
                >
                  <div
                    class="upload-icon"
                  >
                    <v-icon
                      size="58"
                      color="grey"
                    >
                      upload
                    </v-icon>
                  </div>

                  <div
                    class="upload-text"
                  >
                    <h3
                      class="text-h5 font-weight-bold mb-2"
                    >
                      Envie seu arquivo de email
                    </h3>

                    <p
                      class="text-body-1 text--secondary mb-4"
                    >
                      Arraste e solte ou clique para selecionar
                    </p>

                    <div
                      class="accepted-formats"
                    >
                      <span
                        class="text-caption text--secondary mr-2"
                      >
                        Formatos aceitos:
                      </span>

                      <v-chip
                        small
                        class="mr-1"
                        :color="type_archive == 'text/plain' ? 'primary' : ''"
                      >
                        .txt
                      </v-chip>

                      <v-chip
                        small
                        :color="type_archive == 'application/pdf' ? 'primary' : ''"
                      >
                        .pdf
                      </v-chip>
                    </div>

                    <div
                      v-if="input_file_data"
                      class="archive-data"
                    >
                      <span
                        class="font-weight-regular"
                      >
                        Nome do arquivo:
                      </span>

                      <span
                        class="mt-3 text-caption text--secondary"
                      >
                        {{ input_file_data.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </transition>

          <div
            class="text-center mt-6"
          >
            <v-btn
              color="primary"
              class="analyze-btn"
              x-large
              :disabled="input_file_data === null"
              depressed
              @click="handleSetEmailUploadService()"
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
          </div>
        </div>
      </v-col>
    </v-row>

    <v-snackbar
      :value="error.status"
      absolute
      bottom
      color="error"
    >
      <div
        class="text-center"
      >
        <span>
          {{ error.msg }}
        </span>
      </div>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"
  import { $refs } from "@/implements/types"
  import { MixinHandleChangeInput } from "@/mixins/MixinHandleChangeInput"

  @Component({})
  export default class InputFileComponent extends mixins(
    MixinHandleChangeInput
  ) implements $refs {
    $refs

    type_archive = ""
    error = {
      status: false,
      msg: ""
    }

    handleDragOver(e: DragEvent): void {
      e.preventDefault()
    }

    handleDragEnter(e: DragEvent): void {
      e.preventDefault()
      const target = e.currentTarget as HTMLElement
      target.classList.add('drag-over')
    }

    handleDragLeave(e: DragEvent): void {
      e.preventDefault()
      const target = e.currentTarget as HTMLElement
      target.classList.remove('drag-over')
    }

    handleDrop(e: DragEvent): void {
      if (e.dataTransfer?.files) {
        const FILE_DRAG_DROP = Array.from(e.dataTransfer.files)
          .find((file) =>
            file.type === "text/plain" || file.type === "application/pdf"
          )

        if (FILE_DRAG_DROP) {
          this.input_file_data = FILE_DRAG_DROP
          this.type_archive = FILE_DRAG_DROP.type
          console.log("Arquivo recebido via drag and drop:", FILE_DRAG_DROP.name)
        } else {
          this.error = {
            status: true,
            msg: `Este fomato de arquivo não é aceito/suportado`
          }

          console.error("Formato de arquivo não suportado")
        }
      }
    }

    handleFileInput(e: Event): void {
      const {
        files
      } = e.target as HTMLInputElement

      const FILE_INPUT = files ? files[0] : null

      if (!FILE_INPUT) return

      if (
        FILE_INPUT.type === "text/plain" ||
        FILE_INPUT.type === "application/pdf"
      ) {
        this.input_file_data = FILE_INPUT as File
        this.type_archive = FILE_INPUT.type
        return
      }

      this.error = {
        status: true,
        msg: `Este fomato de arquivo não é aceito/suportado`
      }

      setTimeout(() => this.error.status = false, 5000)
    }
  }
</script>

<style lang="stylus" scoped>
  .file-upload-zone
    .hidden-input
      display: none
    .upload-area
      border: 2px dashed #e0e0e0
      border-radius: 16px
      cursor: pointer
      transition: .8s all ease-in
      background-color: white
      &:hover
        border-color: #1976d2
        background-color: rgba(25, 118, 210, 0.04)
      &.drag-over
        border-color: #1976d2
        background-color: rgba(25, 118, 210, 0.08)
        transform: scale(1.02)
    .upload-content
      .upload-icon
        width: 80px
        height: 80px
        border-radius: 50%
        background-color: #f5f5f5
        display: flex
        align-items: center
        justify-content: center
        margin: 0 auto 16px
        transition: all 0.3s ease
        &.active
          background-color: #e3f2fd
          transform: scale(1.1)
        &:hover
          background-color: #e3f2fd
          transform: scale(1.05)
    .accepted-formats
      display: flex
      align-items: center
      justify-content: center
      flex-wrap: wrap
      gap: 8px
    .archive-data
      padding-top: 25px
      max-width: 350px
      margin: 0 auto
    .analyze-btn
      background: linear-gradient(135deg, #1976d2, #7b1fa2)
      border-radius: 12px
      padding: 16px 32px
      font-weight: 600
      text-transform: none
      letter-spacing: 0.5px
  .fade-enter-active,
  .fade-leave-active
    transition: opacity 0.3s ease, transform 0.3s ease
  .fade-enter,
  .fade-leave-to
    opacity: 0
    transform: translateY(20px)
</style>
