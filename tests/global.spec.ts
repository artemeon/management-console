import Server from '@/Globals/Storage/Server'

var assert = require('assert')
var expect = require('chai').expect
var should = require('chai').should()
// var mock = (function () {
//   var store = {
//     mc_server_cfg: {
//       systems: [
//         { title: 'agp', url: 'http://localhost/agp', token: 'agpToken' },
//         { title: 'agp2', url: 'http://localhost/agp', token: 'agpToken' },
//         { title: 'agp3', url: 'http://localhost/agp3333', token: 'agpToken' },
//         { title: 'test', url: 'test', token: 'test' },
//         { title: 'rym', url: 'rym', token: 'rym' },
//         { title: 'a', url: 'b', token: 'c' },
//         { title: 'a', url: 'b', token: 'c' }
//       ]
//     }
//   }
//   return {
//     getItem: function (key) {
//       return store[key]
//     },
//     setItem: function (key, value) {
//       store[key] = value.toString()
//     },
//     clear: function () {
//       store = { mc_server_cfg: { systems: [] } }
//     },

//     length: 0,
//     removeItem: function (key) {
//       delete store[key]
//     },
//     key: function (i) {
//       var keys = Object.keys(store)
//       return keys[i] || null
//     }
//   }
// })()
// localStorage = mock
var store = {
  systems: [
    { title: 'agp', url: 'http://localhost/agp', token: 'agpToken' },
    { title: 'agp2', url: 'http://localhost/agp', token: 'agpToken' },
    { title: 'agp3', url: 'http://localhost/agp3333', token: 'agpToken' },
    { title: 'test', url: 'test', token: 'test' },
    { title: 'rym', url: 'rym', token: 'rym' },
    { title: 'a', url: 'b', token: 'c' },
    { title: 'a', url: 'b', token: 'c' }
  ]
}
module.exports = store
function get_servers () {
  let temp = store
  let result =
    typeof temp.systems === 'object' ? temp.systems : JSON.parse(temp.systems)

  return result
}
// module.exports = get_servers()
// interface Server {
//   url:string,
//   title:string,
//   token:string
// }
// function set_server (server:Server) {

// }
// module.exports = set_server(server:Server)
describe('Local Storage Functions', function () {
  it('Get Servers : should return object with systems', function () {
    assert.equal(typeof get_servers(), 'object')
  })
  // it('Set Server : Should set one server and add it to the servers list')
})
