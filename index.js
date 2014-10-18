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
 * @param {...*} values
 */

function add(/* values... */) {
    this.values.push.apply(this.values, arguments);
}

/**
 * Remove all arguments.
 *
 * @this DatalistInterface
 * @param {...*} values
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
 * Expose methods on prototype.
 */

var datalistInterfacePrototype;

datalistInterfacePrototype = DatalistInterface.prototype;

datalistInterfacePrototype.add = add;
datalistInterfacePrototype.remove = remove;
datalistInterfacePrototype.is = is;
datalistInterfacePrototype.all = all;

/**
 * Expose `DatalistInterface`.
 */

module.exports = DatalistInterface;
