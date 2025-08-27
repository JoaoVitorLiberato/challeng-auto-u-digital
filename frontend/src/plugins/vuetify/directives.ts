import Vue from "vue"

function advancedmodifier (el, binding, value) {
  /** @HowUse */
  /*
    acceptable parameters
      v-width
      v-width.min
      v-width.max
      v-height
      v-height.min
      v-height.max
  */

  /*
    acceptable values
      100   Number
      100px String
      100%  String
      100vw String
      100vh String
  */
  /** @HowUse */

  const modifiersFirst = ["padding", "margin", "border"]
  const modifiersInside = ["filter"]

  let modifiers = binding.name

  if (value && !/string/i.test(value.constructor)) { value = `${value}px` }

  if (Object.keys(binding.modifiers).length) {
    switch (true) {
      case modifiersFirst.includes(modifiers):
        modifiers = `${modifiers}-${Object.keys(binding.modifiers)[0]}`
        break
      case modifiersInside.includes(modifiers):
        if (!value) {
          value = null
        } else {
          value = `${Object.keys(binding.modifiers)[0]}(${value})`
        }
        break
      default:
        modifiers = `${Object.keys(binding.modifiers)[0]}-${modifiers}`
    }
  }

  el.style[modifiers] = value
}

function modularmodifier (el, binding, value) {
  /** @HowUse */
  /*
    acceptable parameters
      v-top
      v-right
      v-bottom
      v-left
      v-font-size
  */

  /*
    acceptable values
      100   Number
      100px String
      100%  String
      100vw String
      100vh String
      100em String
  */
  /** @HowUse */

  if (value && !/string/i.test(value.constructor)) { value = `${value}px` }

  el.style[binding.name] = value
}

function basicmodifier (el, binding) {
  /** @HowUse */
  /*
  acceptable parameters
    v-cursor
    v-overflow|-x|-y
    v-position
*/

  /*
  acceptable values
    pointer String
    default String
    text String
    hidden String
    scroll String
    absolute String
    relative String
    fixed String
*/
  /** @HowUse */

  let modifiers = binding.value
  if (modifiers === false) {
    modifiers = null
  } else {
    if (Object.keys(binding.modifiers).length) modifiers = Object.keys(binding.modifiers)[0]
  }
  el.style[binding.name] = modifiers
}

Vue.directive("width", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  advancedmodifier(el, binding, bindingValue)
})

Vue.directive("height", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  advancedmodifier(el, binding, bindingValue)
})

Vue.directive("filter", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  advancedmodifier(el, binding, bindingValue)
})

Vue.directive("padding", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  advancedmodifier(el, binding, bindingValue)
})

Vue.directive("margin", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  advancedmodifier(el, binding, bindingValue)
})

Vue.directive("border", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  advancedmodifier(el, binding, bindingValue)
})

Vue.directive("top", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  modularmodifier(el, binding, bindingValue)
})

Vue.directive("right", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  modularmodifier(el, binding, bindingValue)
})

Vue.directive("bottom", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  modularmodifier(el, binding, bindingValue)
})

Vue.directive("left", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  modularmodifier(el, binding, bindingValue)
})

Vue.directive("font-size", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  modularmodifier(el, binding, bindingValue)
})

Vue.directive("cursor", function (el, binding) {
  basicmodifier(el, binding)
})

Vue.directive("position", function (el, binding) {
  basicmodifier(el, binding)
})

Vue.directive("overflow", function (el, binding) {
  basicmodifier(el, binding)
})

Vue.directive("overflow-x", function (el, binding) {
  basicmodifier(el, binding)
})

Vue.directive("overflow-y", function (el, binding) {
  basicmodifier(el, binding)
})

Vue.directive("color", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})

Vue.directive("background-color", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})

Vue.directive("line-height", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})

Vue.directive("opacity", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})

Vue.directive("z-index", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})

Vue.directive("transform", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})

Vue.directive("box-shadow", function (el, binding) {
  let bindingValue = binding.value
  if (!binding.value || binding.value === false) bindingValue = null
  el.style[binding.name] = bindingValue
})