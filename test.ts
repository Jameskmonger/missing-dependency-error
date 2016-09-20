import { Test, Expect, TestCase } from "alsatian";
import MissingDependencyError from "./index";

export class MissingDependencyErrorTests {

    @Test()
    public shouldInheritError() {
        let error = new MissingDependencyError("");

        Expect(error instanceof Error).toBe(true);
    }

    @TestCase("bla bla bla")
    @TestCase("SomeDependency")
    @TestCase("AnotherDependency")
    public shouldSetErrorMessageCorrectly(dependencyName: string) {
        let error = new MissingDependencyError(dependencyName);

        Expect(error.message).toBe(`Missing dependency: ${dependencyName}`);
    }

    @Test()
    public shouldHaveCorrectName() {
        let error = new MissingDependencyError("");

        Expect(error.name).toBe("MissingDependencyError");
    }

}
