import bcrypt from "bcryptjs";
import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter new admin password: ", async (password) => {
  rl.close();
  if (password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }
  const hash = await bcrypt.hash(password, 10);
  console.log("\nFor your .env file (local dev) — single quotes prevent $ expansion:\n");
  console.log(`ADMIN_PASSWORD_HASH='${hash}'`);
  console.log("\nFor Vercel env vars dashboard — paste the raw hash (no quotes):\n");
  console.log(hash);
  console.log("\nDone.");
});
