'use strict';

/**
 * Dependencies.
 */

var DatalistInterface,
    assert;

DatalistInterface = require('./');
assert = require('assert');

/**
 * Tests.
 */

describe('DatalistInterface#is(value)', function () {
    var fish;

    fish = new DatalistInterface(['shark', 'tuna']);

    it('should return true if a value is in the database', function () {
        assert(fish.is('shark') === true);
    });

    it('should return false if a value is not in the database', function () {
        assert(fish.is('unicorn') === false);
    });
});

describe('DatalistInterface#toString()', function () {
    var fish;

    fish = new DatalistInterface(['shark', 'tuna']);

    it('should return values delimited by commas', function () {
        assert(fish.toString() === 'shark,tuna');
    });
});

describe('DatalistInterface#all()', function () {
    var mammals,
        all;

    mammals = new DatalistInterface(['colugo', 'human']);

    all = mammals.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('should return all values in context', function () {
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

describe('DatalistInterface#add(value) and DatalistInterface#remove(value)',
    function () {
        var mammals;

        mammals = new DatalistInterface(['colugo', 'human']);

        it('should add or remove `value`', function () {
            assert(mammals.is('unicorn') === false);

            mammals.add('unicorn');

            assert(mammals.is('unicorn') === true);

            mammals.remove('unicorn');

            assert(mammals.is('unicorn') === false);
        });

        it('should add or remove all arguments', function () {
            assert(mammals.is('unicorn') === false);
            assert(mammals.is('doge') === false);

            mammals.add('unicorn', 'doge');

            assert(mammals.is('unicorn') === true);
            assert(mammals.is('doge') === true);

            mammals.remove('unicorn', 'doge');

            assert(mammals.is('unicorn') === false);
            assert(mammals.is('doge') === false);
        });

        it('should fail silently when removing non-existing `value`',
            function () {
                assert(mammals.is('unicorn') === false);

                mammals.remove('unicorn');

                assert(mammals.is('unicorn') === false);
            }
        );
    }
);
