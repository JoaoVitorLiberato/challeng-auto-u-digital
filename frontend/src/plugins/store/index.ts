import Vue from "vue"
import Vuex, { StoreOptions } from "vuex"

import { rootStateInterface } from "@/plugins/store/interfaces/rootStateInterface"
import { cacheStoreModule } from "@/plugins/store/cacheStore/cacheStoreModule"

Vue.use(Vuex)

const store: StoreOptions<rootStateInterface> = {
  strict: false,
  modules: {
    cacheStoreModule
  },
}

export default new Vuex.Store<rootStateInterface>(store)
