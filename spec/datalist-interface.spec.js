'use strict';

var DatalistInterface, assert;

DatalistInterface = require('..');
assert = require('assert');

describe('DatalistInterface#is(value)', function () {
    var fish = new DatalistInterface(['shark', 'tuna']);

    it('should return true if a value is in the database', function () {
        assert(fish.is('shark') === true);
    });

    it('should return false if a value is not in the database', function () {
        assert(fish.is('unicorn') === false);
    });
});

describe('DatalistInterface#all()', function () {
    var mammals = new DatalistInterface(['colugo', 'human']),
        all = mammals.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('should return all values in the datalist', function () {
        assert(all.indexOf('colugo') !== -1);
        assert(all.indexOf('human') !== -1);
        assert(all.length === 2);
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(mammals.is('unicorn') === false);
        assert(mammals.all().indexOf('unicorn') === -1);
    });
});

describe('DatalistInterface#add(filler) and DatalistInterface#remove(filler)',
    function () {
        var mammals = new DatalistInterface(['colugo', 'human']);

        it('should add and remove a filler', function () {
            assert(mammals.is('unicorn') === false);

            mammals.add('unicorn');
            assert(mammals.is('unicorn') === true);

            mammals.remove('unicorn');
            assert(mammals.is('unicorn') === false);
        });

        it('should add and remove multiple DatalistInterface', function () {
            assert(mammals.is('unicorn') === false);
            assert(mammals.is('doge') === false);

            mammals.add('unicorn', 'doge');
            assert(mammals.is('unicorn') === true);
            assert(mammals.is('doge') === true);

            mammals.remove('unicorn', 'doge');
            assert(mammals.is('unicorn') === false);
            assert(mammals.is('doge') === false);
        });

        it('should fail silently when removing a non-existing filler',
            function () {
                assert(mammals.is('unicorn') === false);
                mammals.remove('unicorn');
                assert(mammals.is('unicorn') === false);
            }
        );
    }
);
