import { Module, GetterTree, ActionTree, MutationTree } from "vuex"
import { rootStateInterface } from "@/plugins/store/interfaces/rootStateInterface"
import { cacheStoreInterface } from "@/plugins/store/interfaces/cacheStoreInterface"

const moduleCache = (): cacheStoreInterface => {
  return {
    typeSendSegment: "upload"
  }
}

const state: cacheStoreInterface = moduleCache()

const getters: GetterTree<cacheStoreInterface, rootStateInterface> = {
  CacheTypeSendSegment: ({ typeSendSegment }) => () => {
    return typeSendSegment
  }
}

const actions: ActionTree<cacheStoreInterface, rootStateInterface> = {
  ActionTypeSendSegment ({ commit }, data) {
    commit("MutationTypeSendSegment", data)
  }
}

const mutations: MutationTree<cacheStoreInterface> = {
  MutationTypeSendSegment (state, data) {
    state.typeSendSegment = data
  }
}

const cacheStoreModule: Module<cacheStoreInterface, rootStateInterface> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export {
  cacheStoreModule
}
