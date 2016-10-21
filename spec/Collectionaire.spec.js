import collection from '../src/Collectionaire'

describe("Collectionaire", () => {

  let testCollection

  beforeEach(() => {
    testCollection = [
      { id: 0, name: 'Русский',   active: true  },
      { id: 1, name: 'English',   active: false },
      { id: 2, name: 'Française', active: false },
    ]
  })

  it("should update values by string condition", () => {
    // collection(testCollection)
    //   .where('id = 1, id == 1, id != 1, id > 0, id >= 0, id < 0, id <= 0')
    //   .where('id = false, id = "true life", id = :id', { id: [ 1,2,3 ] })
    //   .filter()
    // TODO: should update values by string condition
  })


  it("should toggle collection with where condition", () => {
    let newCollection =
      collection(testCollection)
        .where({ id: { $lt: 1 } })
        .toggle({ active: [false, true], name: ['Русский', 'Portuges'] })
    expect(newCollection[0].name).toEqual('Portuges')
    newCollection.forEach((element) => {
      expect(element.active).toEqual(false)
    })
  })

})
