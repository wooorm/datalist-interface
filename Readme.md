# datalist-interface [![Build Status](https://travis-ci.org/wooorm/datalist-interface.svg?branch=master)](https://travis-ci.org/wooorm/datalist-interface) [![Coverage Status](https://img.shields.io/coveralls/wooorm/datalist-interface.svg)](https://coveralls.io/r/wooorm/datalist-interface?branch=master)

A simple interface for a list functioning as a database.

## Installation

npm:
```sh
$ npm install datalist-interface
```

Component.js:
```sh
$ component install wooorm/datalist-interface
```

Component.js:
```sh
$ bower install datalist-interface
```

## Usage

```js
var DatalistInterface = require('datalist-interface'),
    mammals;

mammals = new DatalistInterface([
    'common vampire bat',
    'virginia opossum',
    'eastern grey kangaroo',
    'tasmanian devil',
    'human',
    'northern elephant seal',
    'fox squirrel',
    'tree pangolin',
    'african elephant',
    'platypus',
    'colugo',
    'reindeer',
    'humpback whale',
    'star-nosed mole',
    'giant panda',
    'giant armadillo',
    'plains zebra',
    'black and rufous elephant shrew'
]);

mammals.is('human'); // true
mammals.is('unicorn'); // false

mammals.add('unicorn');
mammals.is('unicorn'); // true

mammals.remove('unicorn');
mammals.is('unicorn'); // false
```

## API

### DatalistInterface(values)

**datalist-interface** exports a constructor, which can be passed an array.

```js
var DatalistInterface = require('datalist-interface'),
    fish;

fish = new DatalistInterface(['shark', 'tuna']);
```

The following functions are available on the instance:

### DatalistInterface#is(word)

```js
fish.is('shark'); // true
fish.is('human'); // false
```

Returns whether (true) or not (false) a given word is a filler word.

### DatalistInterface#add(word...)

```js
fish.add('giant grouper', 'red lionfish');
```

Adds all arguments to the internal database.
Given values are **NOT** validated.

### DatalistInterface#remove(word...)

```js
fish.remove('giant grouper', 'reindeer');
```

Removes all arguments from the internal database.
Given values are **NOT** validated; no error is thrown when non-existent values are removed.

### DatalistInterface#all()

```js
fish.all(); // ['shark', 'tuna', 'red lionfish']
```

Return the values (as an Array) in the internal database.

## License

MIT © Titus Wormer
