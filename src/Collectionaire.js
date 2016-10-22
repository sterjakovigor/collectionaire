class Collectionaire {

  _result = 'all'

  _matched = []

  _mismatched = []

  _where = false

  _elements = []

  constructor(elements) {
    this._elements = elements
  }

  where(callback) {
    this._where = callback
    return this
  }

  update(newElement) {
    return this._elements.map((element, index) => {
      if (this._where(element)) {
        return { element, ...newElement }
      } else {
        return element
      }
    })
  }

  toggle(options) {
    return this._elements.map((element, index) => {
      let toggledElement = element
      for (let key in options) {
        let first  = options[key][0]
        let second = options[key][1]
        if (this._where(element)) {
          toggledElement = this.toggleElement(element, key, first, second)
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
  return new Collectionaire(collection)
}
