
type Pattern = "Fizz" | "Buzz" | "FizzBuzz" | number;

function fizzBuzz(n: number): Pattern[] {
  const result: Pattern[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

fizzBuzz(100).forEach(s => console.log(s))
