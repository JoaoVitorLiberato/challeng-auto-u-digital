<template>
  <v-row>
    <v-col
      cols="12"
    >
      <h1>
        App
      </h1>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Component } from "vue-property-decorator"
  import { mixins } from "vue-class-component"

  @Component({})

  export default class viewMain extends mixins() {}
</script>
