function random (min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener('alpine:init', () => {
  Alpine.data('typing', (items = [], typingDelayMin = 100, typingDelayMax = 200, pauseDelayMin = 750, pauseDelayMax = 1500) => ({
      items,
      item: '',
      index: 0,
      typingDelayMin,
      typingDelayMax,
      pauseDelayMin,
      pauseDelayMax,
      isActive: false,
      isRemovingCharacter: false,
      timeoutId: null,
      setup () {
        const item = this.$el.innerText.trim() || ''
        if (item.length > 0) {
          // NOTE: Need to use `Alpine.raw` to have the real value since it's wrap in a `Proxy`.
          const index = Alpine.raw(this.items).indexOf(item)
          // Add current element text to items.
          if (index === -1) {
            this.items.push(item)
            this.index = this.items.length
          } else {
            this.index = index
          }
        } else {
          this.index = 0
        }
        this.item = this.items[this.index]
      },
      activate () {
        this.setup()
        this.isRemovingCharacter = this.item.length > 0
        this.isActive = true
        this.timeoutId = setTimeout(this.tick.bind(this), 250)
      },
      nextItem () {
        this.index = (this.index + 1) % this.items.length
        this.item = ''
      },
      tick () {
        let delay = random(this.typingDelayMin, this.typingDelayMax)
        if (this.isRemovingCharacter) {
          this.item = this.item.slice(0, -1)
          // Item removed.
          if (this.item.length === 0) {
            this.isRemovingCharacter = false
            this.nextItem()
            delay = random(this.pauseDelayMin, this.pauseDelayMax)
          }
        } else {
          const currentItem = this.items[this.index]
          // Item written.
          if (this.item.length === this.items[this.index].length) {
            delay = random(this.pauseDelayMin, this.pauseDelayMax)
            this.isRemovingCharacter = true
          } else {
            this.item += this.items[this.index][this.item.length]
          }
        }
        this.timeoutId = setTimeout(this.tick.bind(this), delay)
      }
  }))
})
