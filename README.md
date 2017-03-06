# metal-jest-serializer

[![Build Status](https://travis-ci.org/mthadley/metal-jest-serializer.svg?branch=master)](https://travis-ci.org/mthadley/metal-jest-serializer)

A [Jest](http://facebook.github.io/jest/docs/tutorial-react-native.html#snapshot-test)
snapshot serializer for use with [Metal.js](http://www.metaljs.com/).

## Setup

Just add the following to your Jest configuration in your `package.json`:

```json
"jest": {
  "snapshotSerializers": [
    "metal-jest-serializer"
  ]
}
```
