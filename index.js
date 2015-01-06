'use strict';

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
    var self;

    self = this;

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
    var values,
        index,
        position;

    values = this.values;
    index = arguments.length;

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

/*
 * Expose methods on prototype.
 */

var datalistInterfacePrototype;

datalistInterfacePrototype = DatalistInterface.prototype;

datalistInterfacePrototype.add = add;
datalistInterfacePrototype.remove = remove;
datalistInterfacePrototype.is = is;
datalistInterfacePrototype.has = is;
datalistInterfacePrototype.all = all;
datalistInterfacePrototype.valueOf = all;
datalistInterfacePrototype.toJSON = all;
datalistInterfacePrototype.toString = toString;

/*
 * Expose `DatalistInterface`.
 */

module.exports = DatalistInterface;
