export default class Condition {

  compare(element, conditions = {}) {
    if (conditions == {}) return true
    let score = { count: 0, true:  0, false: 0 }
    for (let attribute in conditions) {
      for (let logic in conditions[attribute]) {
        score.count++
        let value = conditions[attribute][logic]
        let calculateIsTrue = this.calculate(element[attribute], logic, value)
        if (calculateIsTrue) {
          score.true++
        } else {
          score.false++
        }
      }
    }
    if(score.true == score.count) {
      return true
    } else {
      return false
    }
  }


  calculate(a, logic, b) {
    return this.calculateByLetters.apply(this, arguments)
  }

  calculateBySymbols(a, logic, b) {

  }

  calculateByLetters(a, logic, b) {
    logic = logic.slice(1)
    switch (logic) {
      case 'eq':
        return (a == b)
      case 'ne':
        return (a != b)
      case 'gt':
        return (a > b)
      case 'ge':
        return (a >= b)
      case 'lt':
        return (a < b)
      case 'le':
        return (a <= b)
    }
  }


}
