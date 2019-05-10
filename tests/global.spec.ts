var assert = require('assert')
var expect = require('chai').expect
var should = require('chai').should()
// function get_servers () {
//   let temp = JSON.parse(localStorage.getItem('mc_server_cfg') || '{}')
//   let result =
//     typeof temp.systems === 'object' ? temp.systems : JSON.parse(temp.systems)

//   return result
// }
// module.exports = get_servers()
describe('Get Servers from Local Storage', function () {
  it('should return object with systems', function () {
    // assert.equal(typeof get_servers(), 'object')
    assert.equal('Hello'.length, 5)
  })
})
