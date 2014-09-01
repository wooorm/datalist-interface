'use strict';

var datalistInterfacePrototype;

function DatalistInterface(values) {
    this.values = [];
    this.add.apply(this, values);
}

datalistInterfacePrototype = DatalistInterface.prototype;

function add(/* values... */) {
    this.values.push.apply(this.values, arguments);
}

function remove(/* values... */) {
    var values = this.values,
        iterator = -1,
        length = arguments.length,
        index;

    while (++iterator < length) {
        index = values.indexOf(arguments[iterator]);

        if (index !== -1) {
            values.splice(index, 1);
        }
    }
}

function is(value) {
    return this.values.indexOf(value) !== -1;
}

function all() {
    return this.values.concat();
}

datalistInterfacePrototype.add = add;
datalistInterfacePrototype.remove = remove;
datalistInterfacePrototype.is = is;
datalistInterfacePrototype.all = all;

exports = module.exports = DatalistInterface;
