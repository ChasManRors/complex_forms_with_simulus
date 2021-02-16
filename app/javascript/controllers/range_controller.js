
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "minimum", "maximum" ]

  change(event) {
    console.log(event.target)
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    let select = event.target
    let ds = select[select.selectedIndex].dataset
    this.minimumTarget.value = ds.minimum
    this.maximumTarget.value = ds.maximum
  }
}
