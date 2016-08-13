/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module datalist-interface
 * @fileoverview Parse and stringify CSS declarations.
 */

'use strict';

/* Expose. */
module.exports = DatalistInterface;

/* Methods. */
var proto = DatalistInterface.prototype;

proto.add = add;
proto.remove = remove;
proto.is = proto.has = is;
proto.all = proto.valueOf = proto.toJSON = all;
proto.toString = toString;

/**
 * An interface for a list of items.
 *
 * @constructor
 * @param {Array.<*>} values
 */
function DatalistInterface(values) {
  this.values = [];
  this.add.apply(this, values);
}

/**
 * Add all arguments.
 *
 * @this DatalistInterface
 * @return {DatalistInterface} - Self.
 */
function add(/* values... */) {
  var self = this;

  self.values.push.apply(self.values, arguments);

  return self;
}

/**
 * Remove all arguments.
 *
 * @this DatalistInterface
 * @return {DatalistInterface} - Self.
 */
function remove(/* values... */) {
  var values = this.values;
  var index = arguments.length;
  var position;

  while (index--) {
    position = values.indexOf(arguments[index]);

    if (position !== -1) {
      values.splice(position, 1);
    }
  }

  return this;
}

/**
 * Whether or not `value` is in context.
 *
 * @this DatalistInterface
 * @param {*} value
 * @return {boolean}
 */
function is(value) {
  return this.values.indexOf(value) !== -1;
}

/**
 * Get all values.
 *
 * @this DatalistInterface
 * @return {Array.<*>}
 */
function all() {
  return this.values.concat();
}

/**
 * Stringify all values.
 *
 * @this DatalistInterface
 * @return {string}
 */
function toString() {
  return this.values.toString();
}
