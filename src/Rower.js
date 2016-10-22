class Rower {

  _result = 'all'

  _where = []

  _elements = []

  constructor(elements) {
    this._elements = elements
  }

  matched(element) {
    let score = {
      total: this._where.length,
      false: 0,
      true: 0
    }

    this._where.forEach((condition, index) => {
      if(condition(element)){
        score.true++
      } else {
        score.false--
      }
    })

    if(score.total == score.true) {
      return true
    } else {
      return false
    }
  }

  find() {
    return this._elements.filter((element, index) => {
      if (this.matched(element)) {
        return true
      } else {
        return false
      }
    })
  }

  where(callback) {
    this._where.push(callback)
    return this
  }

  pluck(key) {
    return this._elements.map((element, index) => {
      return element[key]
    })
  }

  delete() {
    return this._elements.filter((element, index) => {
      if (this.matched(element)) {
        return false
      } else {
        return true
      }
    })
  }

  update(newElement) {
    return this._elements.map((element, index) => {
      if (this.matched(element)) {
        return { element, ...newElement }
      } else {
        return element
      }
    })
  }

  toggle(options) {
    return this._elements.map((element, index) => {
      let toggledElement = { ...element }
      for (let key in options) {
        let first  = options[key][0]
        let second = options[key][1]
        if (this.matched(element)) {
          toggledElement = this.toggleElement(toggledElement, key, first, second)
        }
      }
      return toggledElement
    })
  }

  toggleElement(element, key, first, second) {
    switch (element[key]) {
      case first:
        element[key] = second
        break
      case second:
        element[key] = first
        break
    }
    return element
  }

}

export default function(collection = false) {
  return new Rower(collection)
}
