import * as ExtendableError from "es6-error";

export default class MissingDependencyError extends ExtendableError {
    constructor (dependencyName: string) {
        super(`Missing dependency: ${dependencyName}`);
    }
}
