import Vue from "vue"
import { Component } from "vue-property-decorator"
import { namespace } from "vuex-class"

const cacheStore = namespace("cacheStoreModule")

@Component({})
export class MixinControlProcess extends Vue {
  @cacheStore.Getter("CacheProcess") declare getCacheProcess
  @cacheStore.Action("ActionProcess") declare setCacheProcess

  get processError (): boolean {
    return this.getCacheProcess("process.error")
  }

  set processError (value: boolean) {
    this.setCacheProcess({ path: "process.error", value })
  }

  get processLoading (): boolean {
    return this.getCacheProcess("process.loading")
  }

  set processLoading (value: boolean) {
    this.setCacheProcess({ path: "process.loading", value })
  }
}
