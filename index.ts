export default class MissingDependencyError extends Error {
    constructor (dependencyName: string) {
        super(`Missing dependency: ${dependencyName}`);
        this.name = "MissingDependencyError";

        console.log(super.message);

        //this.message = `Missing dependency: ${dependencyName}`;
    }
}
