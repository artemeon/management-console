import local from '../src/Globals/Storage/Local'
var assert = require('assert')
var expect = require('chai').expect
var should = require('chai').should()
function storageMock () {
  var storage = {}
  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length () {
      return Object.keys(storage).length
    },
    key: function (i) {
      var keys = Object.keys(storage)
      return keys[i] || null
    },
    clear: function () {
      storage = {}
    }
  }
}
localStorage = storageMock()

// describe('Local Storage Functions', function () {
//   it('Get Servers : should return object with systems', function () {
//     assert.equal(typeof local.prototype.getServers(), 'object')
//   })
//   // it('Set Server : Should set one server and add it to the servers list')
// })
