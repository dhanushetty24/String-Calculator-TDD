const add = (num) => {
  if (!num) return 0; // Check for empty or undefined input

  let delimiter = /,|\n/; // Default delimiters: comma or newline

  // Check for custom delimiter
  if (num.startsWith("//")) {
    let i = 2;
    let customDelimiter = "";

    // Extract the custom delimiter until newline
    while (num[i] !== "\n" && i < num.length) {
      customDelimiter += num[i];
      i++;
    }

    // Create regex for custom delimiter
    delimiter = new RegExp(customDelimiter);

    // Remove the delimiter line
    let remainingNum = "";
    for (let j = i + 1; j < num.length; j++) {
      remainingNum += num[j];
    }
    num = remainingNum;
  }

  // Convert the input string to an array of numbers
  const numArray = [];
  let currentNumber = "";

  for (let i = 0; i < num.length; i++) {
    if (delimiter.test(num[i])) {
      if (currentNumber) {
        numArray.push(Number(currentNumber));
        currentNumber = "";
      }
    } else {
      currentNumber += num[i];
    }
  }

  // Add the last number if there is one
  if (currentNumber) numArray.push(Number(currentNumber));

  // Check for negative numbers
  const negatives = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] < 0) negatives.push(numArray[i]);
  }

  if (negatives.length > 0) {
    let errorMessage = "negative numbers not allowed: ";
    for (let i = 0; i < negatives.length; i++) {
      errorMessage += negatives[i];
      if (i !== negatives.length - 1) {
        errorMessage += ", ";
      }
    }
    throw new Error(errorMessage);
  }

  // Calculate the sum of numbers
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }

  return sum;
};

module.exports = { add };
