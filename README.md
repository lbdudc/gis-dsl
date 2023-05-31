# gisdsl

It parses a DSL instance and generates the spec for the web-based GIS SPL.

## Installation

```
npm install
```

## Usage

```
import gisdslParser from "gisdsl";

const spec = gisdslParser(inputString);
```

The DSL instance must finish with a `GENERATE GIS` sentence in order to work. See examples within the tests files.
