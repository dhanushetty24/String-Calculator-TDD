const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return number itself if there is only one number', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum of two comma separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('should handle arbitrary amount of numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiters at the beginning of the string', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test('should list all negative numbers in the exception message', () => {
    expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed: -2, -3");
  });
});