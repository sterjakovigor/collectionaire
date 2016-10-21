import Condition from '../../src/lib/Condition'

describe("Condition", () => {

  let condition

  beforeEach(() => {
    condition = new Condition()
  })

  it("should compare multiple letters conditions for multiple properties", () => {
    let result = condition.compare(
      { id: 0, name: 'Русский' },
      {
        id: { $eq: 0, $ne: 1, $gt: -1, $ge: 0, $lt: 1, $le: 0 },
        name: { $eq: 'Русский' },
      }
    )
    expect(result).toBe(true)
  })

  it("should compare multiple symbol conditions for multiple properties", () => {
    let condition = [
      'id = 1, id == 1, id != 1',
      // 'id > 0, id >= 0, id < 0, id <= 0',
      // 'id = false, id = "true life"',
    ]
    let result = condition.compare(
      { id: 0, name: 'Русский' }, condition
    )
  })


  it("A equal B", () => {
    expect(condition.calculate(1, '$eq', 1)).toBe(true)
  })

  it("A not equal B", () => {
    expect(condition.calculate(1, '$ne', 2)).toBe(true)
  })

  it("A greater than B", () => {
    expect(condition.calculate(2, '$gt', 1)).toBe(true)
  })

  it("A greater equal B", () => {
    expect(condition.calculate(1, '$ge', 1)).toBe(true)
    expect(condition.calculate(2, '$ge', 1)).toBe(true)
  })

  it("A less than B", () => {
    expect(condition.calculate(1, '$lt', 2)).toBe(true)
  })

  it("A less equal B", () => {
    expect(condition.calculate(1, '$le', 1)).toBe(true)
    expect(condition.calculate(1, '$le', 2)).toBe(true)
  })


})
