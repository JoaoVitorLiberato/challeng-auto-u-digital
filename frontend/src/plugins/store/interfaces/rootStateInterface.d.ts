import Vue from "vue"

interface rootStateInterface {
  strict: boolean;
  modules: {
    [key: string]: string[];
  };
  _vm: Vue;
}

export {
  rootStateInterface,
}
