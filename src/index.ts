/**
 * Main entry point for the TypeScript application
 */

/**
 * Greets a user with a personalized message
 * @param name - The name of the user to greet
 * @returns A greeting message
 */
/**
 * Greets a user with a personalized message
 * @param name - The name of the user to greet
 * @returns A greeting message
 */
function greet(name: string): string {
  const trimmedName = name.trim();
  if (!trimmedName) {
    return 'Hello, Guest!';
  }
  return `Hello, ${trimmedName}!`;
}

/**
 * Main function to run the application
 */
function main(): void {
  console.log(`Hello, World! Welcome to your new TypeScript project!`);

  const userName = 'Developer';
  console.log(greet(userName));
}

// Run the application
main();
