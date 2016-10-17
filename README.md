# sort  [![Build Status](https://travis-ci.org/tHBp/sort.svg?branch=master)](https://travis-ci.org/tHBp/sort)

A tiny library to sort array of objects based on multiple properties. <br>Ultra small, just `0.50KB` [minified+gzipped] and `2.25KB` [uncompressed source].

## Getting Started

If you are using npm
```
$ npm install --save objectarray-sort
```
or include `index.js` manually as<br>

`<script src="index.js" charset="utf-8"></script>`

## Usage

```javascript
const sort = require('objectarray-sort');

sort([{a:{b:2}},{a:{b:6}},{a:{b:1}}], 'a.b');

sort(test, ['a.b', 'a.c.d', 'a.e.f.g'], ['desc', 'asc', 'desc']);
```
For browser environments, the library exports a global `arraySort`, which can be used in a similar fashion,
```js
arraySort(test, ['a.b', 'a.c', 'a.d'], ['desc', 'asc', 'desc']);
// returns the sorted 'test' array
```

## API

### sort(array, sortBy, [order])

Sorts and returns an array.

#### array

Type: `Array`<br>
Default: none

Array to be sorted


#### sortBy

Type: `String | Array`<br>
Default: none

The property against which sorting is to be performed. A single string value or array of strings.
<br>If an array is passed, the priority of sort is in decreases from left to right. <br>Say, if you pass `['a.b', 'a.c']` as the argument, the function will sort the array based on `'a.b'` first, then for same values of `'a.b'`, it will sort those values by `'a.c'` and so on. <br>By default, all orders are ascending. For changing order, see [order](#order).


#### order

Type: `String | Array`<br>
Default: `'asc'`

The order which sorting is to be performed. A single string value or array of strings. Values are `'asc'` or `'desc'`.<br>
If it is an array, it maps one to one to the arguments of `sortBy`.
<br>In the example `sort(test, ['a.b', 'a.c.d', 'a.e.f.g'], ['desc', 'asc', 'desc'])`, `'a.b'` is sorted in descending order, `'a.c.d'` in ascending order and `'a.e.f.g'` in descending order.

Defaults to `'asc'`.
