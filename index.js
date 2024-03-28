const fs = require("fs")
const readline = require("node:readline/promises");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {

  const mineral = {};

  const properties = ["sample number", "color", "form", "lusture", "streak", "hardness", "cleavage", "fracture", "specific gravity", "chemical composition", "diagnostic properties", "name"];

  for (let property of properties) {
    const value = await rl.question(`Enter ${property}: `);
    property = property.replace(" ", "").toUpperCase();
    mineral[property] = value;
  }

  console.log(mineral);

  fs.writeFileSync(`./minerals/${mineral.NAME}.json`, JSON.stringify(mineral))

  process.exit();

}

main();
