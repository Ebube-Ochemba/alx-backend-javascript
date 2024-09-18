// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen to stdin for input using the 'readable' event
process.stdin.on('readable', () => {
  // Read the chunk of input provided by the user
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the 'end' event, which triggers when input stream closes (e.g., by piping)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
