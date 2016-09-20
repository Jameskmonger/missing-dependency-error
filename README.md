# missing-dependency-error

A simple extension of the JavaScript `Error` object ([read on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Error)) to be thrown when a dependency isn't provided.

## Installation

    npm install missing-dependency-error

## Usage

    import MissingDependencyError from "missing-dependency-error";

    let err = new MissingDependencyError("SomeDependency");

The above example will create a `MissingDependencyError` object with the message:

> Missing dependency: SomeDependency

## License

This is licensed under the MIT license. See the [LICENSE file](LICENSE) for more information.
