'use strict'

module.exports = DatalistInterface

var proto = DatalistInterface.prototype

proto.add = add
proto.remove = remove
proto.is = is
proto.has = is
proto.all = all
proto.valueOf = all
proto.toJSON = all
proto.toString = toString

// An interface for a list of items.
function DatalistInterface(values) {
  this.values = []
  this.add.apply(this, values)
}

// Add all arguments.
function add(/* values... */) {
  var self = this

  self.values.push.apply(self.values, arguments)

  return self
}

// Remove all arguments.
function remove(/* values... */) {
  var values = this.values
  var index = arguments.length
  var position

  while (index--) {
    position = values.indexOf(arguments[index])

    if (position !== -1) {
      values.splice(position, 1)
    }
  }

  return this
}

// Whether or not `value` is in context.
function is(value) {
  return this.values.indexOf(value) !== -1
}

// Get all values.
function all() {
  return this.values.concat()
}

// Stringify all values.
function toString() {
  return this.values.toString()
}
