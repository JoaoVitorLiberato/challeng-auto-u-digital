import { Module, GetterTree, ActionTree, MutationTree } from "vuex"
import { rootStateInterface } from "@/plugins/store/interfaces/rootStateInterface"
import { cacheStoreInterface } from "@/plugins/store/interfaces/cacheStoreInterface"

const moduleCache = (): cacheStoreInterface => {
  return {
    typeSendSegment: "upload",
    result: {},
    process: {
      loading: false,
      error: false
    }
  }
}

const state: cacheStoreInterface = moduleCache()

const getters: GetterTree<cacheStoreInterface, rootStateInterface> = {
  CacheTypeSendSegment: ({ typeSendSegment }) => () => {
    return typeSendSegment
  },
  CacheResult: ({ result }) => (data) => {
    if (data) result = data
    return result
  },
  CacheProcess: (payload) => (path: string) => {
    if (path) {
      const getNestedProperty = (payload: cacheStoreInterface, path: string) => {
        return path.split(".").reduce((acc, key) => acc[key], payload)
      }

      return getNestedProperty(payload, path)
    }
    return payload
  },
}

const actions: ActionTree<cacheStoreInterface, rootStateInterface> = {
  ActionTypeSendSegment ({ commit }, data) {
    commit("MutationTypeSendSegment", data)
  },
  ActionProcess: ({ commit }, payload) => {
    commit("MutationProcess", payload)
  },
}

const mutations: MutationTree<cacheStoreInterface> = {
  MutationTypeSendSegment (state, data) {
    state.typeSendSegment = data
  },
  MutationProcess: (state, payload) => {
    const setNestedProperty = (state: cacheStoreInterface, path: string, value: string) => {
      const PATH_ARRAY = path.split(".")
      const LAST_KEY = PATH_ARRAY.pop()

      PATH_ARRAY.reduce((acc, key) => {
        if (!acc[key]) {
          acc[key] = {}
        }
        return acc[key]
      }, state)[LAST_KEY!] = value
    }

    setNestedProperty(state, payload.path, payload.value)
  },
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
