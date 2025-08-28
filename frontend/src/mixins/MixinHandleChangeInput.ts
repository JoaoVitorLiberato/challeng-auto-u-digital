import { Component, Vue } from "vue-property-decorator"

@Component({})
export class MixinHandleChangeInput extends Vue {
  input_file_data: File | null = null
  input_text_data = ""
}
