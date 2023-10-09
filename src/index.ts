const args: string[] = process.argv.slice(2);

if (args.length === 0) {
  console.log("\nHello World! 🙋🏻‍♂️\n");
} else {
  const [name, userName]: string[] = args[0].split("=");
  console.log(`\nHey there ${userName}! 👋🏻\n`);
}
