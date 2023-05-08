export function toCamelCase(input: string): string {
    var cleanCasedWords = cleanCases(input);
    return cleanCasedWords.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");

    function cleanCases(input: string): string[] {
        return input.split(/[ _-]/);
    }
}


