import { Component, Vue } from "vue-property-decorator"
import { namespace } from "vuex-class"
import { middlewareServiceApi } from "@/middlewares/middlewareServiceApi"

const cacheStore = namespace("cacheStoreModule")

@Component({})
export class MixinHandleChangeInput extends Vue {
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
    try {
      const {
        data
      } = await middlewareServiceApi
        .post("/process", {
          "email_text": this.input_text_data
        })

      if (!data) throw new Error("Houve um erro ao buscar a sugestáo de resposta da AI.")

      console.log(data)
    } catch (error) {
      console.log("ERROR [MixinHandleChangeInput - handleSetEmailTextService]", error)
    }
  }
}
