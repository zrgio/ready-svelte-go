import { create } from "./index.js"

async function main() {
    let cwd = process.argv[2]
    await create(cwd);
}

main();