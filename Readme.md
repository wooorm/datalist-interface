# datalist-interface [![Build Status](https://img.shields.io/travis/wooorm/datalist-interface.svg?style=flat)](https://travis-ci.org/wooorm/datalist-interface) [![Coverage Status](https://img.shields.io/coveralls/wooorm/datalist-interface.svg?style=flat)](https://coveralls.io/r/wooorm/datalist-interface?branch=master)

A simple interface for a list.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
$ npm install datalist-interface
```

[Component.js](https://github.com/componentjs/component):

```bash
$ component install wooorm/datalist-interface
```

[Bower](http://bower.io/#install-packages):

```bash
$ bower install datalist-interface
```

[Duo](http://duojs.org/#getting-started):

```javascript
var DatalistInterface = require('wooorm/datalist-interface');
```

## Usage

```js
var DatalistInterface = require('datalist-interface');

var mammals = new DatalistInterface([
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

mammals.add('unicorn').is('unicorn'); // true

mammals.remove('unicorn').is('unicorn'); // false
```

## API

### DatalistInterface(values)

**datalist-interface** exports a constructor, which can be passed an array.

```js
var DatalistInterface = require('datalist-interface');

var fish = new DatalistInterface(['shark', 'tuna']);
```

The following functions are available on the instance:

### DatalistInterface#is(value)

> Alias: `DatalistInterface#has(value)`

```js
fish.is('shark'); // true
fish.is('human'); // false
```

Returns whether (`true`) or not (`false`) a given value is in the list.

### DatalistInterface#add(value...)

```js
fish.add('giant grouper', 'red lionfish');
```

Add all arguments. Returns self.

### DatalistInterface#remove(value...)

```js
fish.remove('giant grouper', 'reindeer');
```

Remove all arguments. Returns self.
No error is thrown when non-existent values are removed.

### DatalistInterface#all()

> Alias: `DatalistInterface#valueOf()`, `DatalistInterface#toJSON()`

```js
fish.all(); // ['shark', 'tuna', 'red lionfish']
```

Return the list as an `Array`.

### DatalistInterface#toString()

```js
fish.toString(); // 'shark,tuna,red lionfish'
```

Return the list as a `string`.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
