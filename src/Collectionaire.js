import Condition from './lib/Condition'

let condition = new Condition

class Collectionaire {

  _elements = []

  _where = {}

  constructor(elements) {
    this._elements = elements
  }

  where(value) {
    this._where = value
    return this
  }

  toggle(options) {
    return this._elements.map((element, index) => {
      let toggledElement = element
      for (let key in options) {
        let first  = options[key][0]
        let second = options[key][1]
        if (condition.compare(element, this._where)) {
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
