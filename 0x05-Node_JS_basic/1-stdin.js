process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen to stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// listens only for automatic close (by piping)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
