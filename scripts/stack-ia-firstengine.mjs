import { spawnSync } from "node:child_process";

const steps = [
  ["npm", ["install"]],
  ["npm", ["run", "setup"]],
  ["npm", ["run", "doctor"]],
  ["npm", ["run", "typecheck"]],
  ["npm", ["run", "test"]],
  ["npm", ["run", "build"]],
];

for (const [command, args] of steps) {
  const result =
    process.platform === "win32"
      ? spawnSync("cmd.exe", ["/d", "/s", "/c", [command, ...args].join(" ")], {
          stdio: "inherit",
          env: process.env,
        })
      : spawnSync(command, args, {
          stdio: "inherit",
          shell: false,
          env: process.env,
        });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("");
console.log("Quick start completed.");
console.log("Next: run `npm run dev` to start the app.");
