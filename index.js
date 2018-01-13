// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}

var index = require("../index.js")
describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
})

describe("Height", () => {
    it("is less than 40", () => {
      expect(index.height).toBeLessThan(40)
   })
})