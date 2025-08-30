import { Component } from "vue-property-decorator"
import { mixins } from "vue-class-component"
import { namespace } from "vuex-class"
import { middlewareServiceApi } from "@/middlewares/middlewareServiceApi"
import { MixinControlProcess } from "./MixinsControlProcess"

const cacheStore = namespace("cacheStoreModule")

@Component({})
export class MixinHandleChangeInput extends mixins(
  MixinControlProcess
) {
  @cacheStore.Getter("CacheResult") getCacheResult
  @cacheStore.Getter("CacheTypeSendSegment") getCacheTypeSendSegment
  @cacheStore.Action("ActionTypeSendSegment") setCacheTypeSendSegment

  get typeSendAnalyzer (): string {
    return this.getCacheTypeSendSegment()
  }

  set typeSendAnalyzer (value:string) {
    this.setCacheTypeSendSegment(value)
  }

  input_file_data: File | null = null
  input_text_data = ""

  async handleSetEmailTextService (): Promise<void> {
    this.processLoading = true
    try {
      const {
        data
      } = await middlewareServiceApi
        .post("/process", {
          "email_text": this.input_text_data
        })

      if (!data) throw new Error("Houve um erro ao buscar a sugestáo de resposta da AI.")

      this.getCacheResult(data.result)
      setTimeout(() => {
        this.processLoading = false
        this.$router.replace({ params: { segment: "analise-sucesso" } })
      }, 6000)
    } catch (error) {
      console.log("ERROR [MixinHandleChangeInput - handleSetEmailTextService]", error)
      this.processError = true
    }
  }

  async handleSetEmailUploadService (): Promise<void> {
    this.processLoading = true

    if (this.input_file_data === null) return

    const UPLOAD = new FormData()
    UPLOAD.append("email_file", this.input_file_data)

    this.processLoading = true
    try {
      const {
        data
      } = await middlewareServiceApi
        .post("/process", UPLOAD, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

      if (!data) throw new Error("Houve um erro ao buscar a sugestáo de resposta da AI.")

      this.getCacheResult(data.result)

      setTimeout(() => {
        this.processLoading = false
        this.$router.replace({ params: { segment: "analise-sucesso" } })
      }, 6000)
    } catch (error) {
      console.log("ERROR [MixinHandleChangeInput - handleSetEmailUploadService]", error)
      this.processError = true
      this.$router.replace({ params: { segement: "analise-sucesso" } })
    }
  }
}
