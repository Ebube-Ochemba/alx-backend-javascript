console.log('Welcome to Holberton School, what is your name?');

// Ensures the input is handled as a UTF-8 string
process.stdin.setEncoding('utf8');

// Listen to stdin
process.stdin.on('data', (input) => {
  // removes any extra spaces or newline characters
  const name = input.trim();
  console.log(`Your name is: ${name}`);
  process.stdin.pause(); // Stop reading from stdin
});

// listens only for automatic close (by piping)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
