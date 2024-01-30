# GIS DSL

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2019.0.0-brightgreen.svg)
![npm version](https://badge.fury.io/js/gis-dsl.svg)

It parses a DSL instance and generates the spec for the web-based GIS SPL.

## Installation

```bash
npm install
```

## Usage

```js
import gisdslParser from "gisdsl";

const spec = gisdslParser(inputString);
```

The DSL instance must finish with a `GENERATE GIS` sentence in order to work. See examples within the tests files.

## Pre-requisites

- Have installed in your machine:
  - [Node.js](https://nodejs.org/en/download/)

## Author

Alejandro Cortiñas
Email: <alejandro.cortinas@udc.es>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
