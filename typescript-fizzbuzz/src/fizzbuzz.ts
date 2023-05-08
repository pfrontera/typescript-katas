export function fizzBuzz(number: number) {
    switch (true) {
        case isDivisibleBy(15) : return 'fizzbuzz';
        case isDivisibleBy(3) : return 'fizz';
        case isDivisibleBy(5) : return 'buzz';
        default : return number.toString();
    }

    function isDivisibleBy(divisor: number) {
        return number % divisor === 0;
    }
}