# sort  [![Build Status](https://travis-ci.org/tHBp/sort.svg?branch=master)](https://travis-ci.org/tHBp/sort)

A tiny library to sort array of objects based on multiple properties. <br>Really small, just `547 bytes` gzipped (`1.62KB` uncompressed).

## Install

```
$ npm install --save objectarray-sort
```

## Usage

```javascript
const sort = require('objectarray-sort');

sort([{a:{b:2}},{a:{b:6}},{a:{b:1}}], 'a.b');

sort(test, ['a.b', 'a.c', 'a.d'], ['desc', 'asc', 'desc']);
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


#### sortBy

Type: `String | Array`<br>
Default: `'asc'`

The order which sorting is to be performed. A single string value or array of strings. Values are `'asc'` or `'desc'`.
Defaults to `'asc'`.
