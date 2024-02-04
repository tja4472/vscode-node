import { spawn } from "child_process";

// find src -iname *.ts
const child = spawn("find", ["src", "-iname", "*.ts"]);

child.stdout.on("data", (data) => {
  console.log(`stdout:\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

child.on("error", (error) => {
  console.error(`error: ${error.message}`);
});

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

/*
stdout:
src/findFile.ts
src/main.ts
src/main1.ts

child process exited with code 0
*/
