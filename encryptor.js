const { writeFileSync } = require("fs");
writeFileSync("./src-tauri/src/encrypt", `"${process.env.KEY}"`);