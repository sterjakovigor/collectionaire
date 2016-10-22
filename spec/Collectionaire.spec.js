import collection from '../src/Collectionaire'

describe("Collection", () => {

  let testCollection

  beforeEach(() => {
    testCollection = [
      { id: 0, name: 'Русский',   active: true  },
      { id: 1, name: 'English',   active: false },
      { id: 2, name: 'Française', active: false },
    ]
  })

  it("think", => {
    let newCollection =
      collection(testCollection)
      .where(lang => lang.id == 0)
      .result('all') // matched, mismatched, all
      .update({
        active: false,
        name: 'Portuges'
      })

  })

  it("update", () => {
    let newCollection =
      collection(testCollection)
      .where(lang => lang.id == 0)
      .update({
        active: false,
        name: 'Portuges'
      })
    expect(newCollection[0].name).toEqual('Portuges')
    newCollection.forEach( element => expect(element.active).toEqual(false) )
  })

  it("toggle", () => {
    let newCollection =
      collection(testCollection)
      .where(lang => lang.id == 0)
      .toggle({
        name:   ['Русский', 'Portuges'],
        active: [false, true],
      })
    expect(newCollection[0].name).toEqual('Portuges')
    newCollection.forEach( element => expect(element.active).toEqual(false) )
  })

})
