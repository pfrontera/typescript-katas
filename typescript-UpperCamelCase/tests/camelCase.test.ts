import { toCamelCase } from '../src/camelCase';

describe('CamelCase converter should', () => {
    it("handle empty string", () => {
        expect(toCamelCase("")).toBe("");
    });
    it("returns the same word if it starts with a capital letter", () => {
        expect(toCamelCase("Foo")).toBe("Foo");
    });
    it("returns joined words if separated by spaces", () => {
        expect(toCamelCase("Foo Bar")).toBe("FooBar");
    });
    it("returns joined words if separated by hyphens", () => {
        expect(toCamelCase("Foo_Bar-Foo")).toBe("FooBarFoo");
    });
    it("returns the first character of one word to upperCase", () => {
        expect(toCamelCase("foo")).toBe("Foo");
    });
    it("converts the first character of two words to upperCase", () => {
        expect(toCamelCase("foo bar")).toBe("FooBar");
    });
    it("converts the first character of each to upperCase", () => {
        expect(toCamelCase("foo_bar-foo")).toBe("FooBarFoo");
    });
});