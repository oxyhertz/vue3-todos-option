export const clickOutside = {
  mounted(el, { value: cb, modifiers }) {
    el.clickOutside = (ev) => {
      if (modifiers.prevent) ev.preventDefault()
      if (modifiers.stop) ev.stopPropagation()
      const { clientX, clientY } = ev
      const { left, top, width, height } = el.getBoundingClientRect()
      if (!(clientX > left && clientX < left + width && clientY > top && clientY < top + height)) {
        cb()
        // console.log('outside')
      } else {
        // console.log('inside')
      }
    }
    queueMicrotask(() => {
      document.addEventListener('click', el.clickOutside)
    })
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutside)
  },
}
