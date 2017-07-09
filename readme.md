# datalist-interface [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

A simple interface for a list.

## Installation

[npm][]:

```bash
npm install datalist-interface
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

mammals.is('human'); //=> true
mammals.is('unicorn'); //=> false

mammals.add('unicorn').is('unicorn'); //=> true

mammals.remove('unicorn').is('unicorn'); //=> false
```

## API

### `DatalistInterface([value...])`

Create a new instance.  Values are passed to [`#add()`][add].

###### Example

```js
var DatalistInterface = require('datalist-interface');

var fish = new DatalistInterface(['shark', 'tuna']);
```

### `DatalistInterface#is(value)`

### `DatalistInterface#has(value)`

Check if `value` is in the list.

###### Example

```js
fish.is('shark'); //=> true
fish.is('human'); //=> false
```

### `DatalistInterface#add([value...])`

Add each value to `list`.

###### Example

```js
fish.add('giant grouper', 'red lionfish');
```

### `DatalistInterface#remove([value...])`

Remove each value from `list`.

###### Example

```js
fish.remove('giant grouper', 'reindeer');
```

### `DatalistInterface#all()`

### `DatalistInterface#valueOf()`

### `DatalistInterface#toJSON()`

Return the list as an `Array`.

###### Example

```js
fish.all(); //=> ['shark', 'tuna', 'red lionfish']
```

### `DatalistInterface#toString()`

Return the list as a `string`.

###### Example

```js
fish.toString(); //=> 'shark,tuna,red lionfish'
```

## Related

*   [`datamap-interface`](https://github.com/wooorm/datamap-interface)
    — Simple interface for a map

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/datalist-interface.svg

[travis]: https://travis-ci.org/wooorm/datalist-interface

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/datalist-interface.svg

[codecov]: https://codecov.io/github/wooorm/datalist-interface

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[add]: #datalistinterfaceaddvalue
