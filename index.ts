const ExtendableError = require("es6-error");

export default class MissingDependencyError extends ExtendableError {
    // these are here because es6-error has no typings
    public name: string;
    public message: string;

    constructor (dependencyName: string) {
        super(`Missing dependency: ${dependencyName}`);
    }
}
