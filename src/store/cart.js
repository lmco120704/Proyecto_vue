import { reactive } from 'vue'

export const cart = reactive({
  items: [],
  add(item) {
    this.items.push(item)
  },
  remove(item) {
    const index = this.items.findIndex(i => i.title === item.title)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  },
  clear() {
    this.items = []
  }
})
