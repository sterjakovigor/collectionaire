import rower from '../src/'

describe("Collection", () => {

  let testCollection

  beforeEach(() => {
    testCollection = [
      { id: 0, name: 'Русский',   active: true  },
      { id: 1, name: 'English',   active: false },
      { id: 2, name: 'Française', active: false },
    ]
  })

  it("multiple where", () => {
    let newCollection =
      rower(testCollection)
      .where(lang => lang.id > 0)
      .where(lang => lang.id < 2)
      .find()
    expect(newCollection.length).toEqual(1)
    expect(testCollection).not.toEqual(newCollection)
  })

  it("pluck", () => {
    let newCollection =
      rower(testCollection)
      .pluck('id')
    expect(newCollection).toEqual([0,1,2])
    expect(testCollection).not.toEqual(newCollection)
  })

  it("find", () => {
    let newCollection =
      rower(testCollection)
      .where(lang => lang.id == 0)
      .find()
    expect(newCollection.length).toEqual(1)
    expect(testCollection).not.toEqual(newCollection)
  })

  it("delete", () => {
    let newCollection =
      rower(testCollection)
      .where(lang => lang.id == 0)
      .delete()
    expect(newCollection[0].id).toEqual(1)
    expect(testCollection).not.toEqual(newCollection)
  })

  it("update", () => {
    let newCollection =
      rower(testCollection)
      .where(lang => lang.id == 0)
      .update({
        active: false,
        name: 'Portuges'
      })
    expect(newCollection[0].name).toEqual('Portuges')
    newCollection.forEach( element => expect(element.active).toEqual(false) )
    expect(testCollection).not.toEqual(newCollection)
  })

  it("toggle", () => {
    let newCollection =
      rower(testCollection)
      .where(lang => lang.id == 0)
      .toggle({
        name:   ['Русский', 'Portuges'],
        active: [false, true],
      })
    expect(newCollection[0].name).toEqual('Portuges')
    newCollection.forEach( element => expect(element.active).toEqual(false) )
    expect(testCollection).not.toEqual(newCollection)
  })

})
