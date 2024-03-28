const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const sampleNumber = await rl.question("Enter sample number: ");
  const color = await rl.question("Enter color: ");
  const form = await rl.question("Enter form: ");
  const lusture = await rl.question("Enter lusture: ");
  const streak = await rl.question("Enter streak: ");
  const hardness = await rl.question("Enter hardness: ");
  const cleavage = await rl.question("Enter cleavage: ");
  const fracture = await rl.question("Enter fracture: ");
  const specificGravity = await rl.question("Enter specific gravity: ");
  const chemicalComposition = await rl.question("Enter chemical composition: ");
  const diagnosticProperties = await rl.question("Enter diagnostic properties: ");
  const name = await rl.question("Enter name: ");

  const mineral = {
    sampleNumber: sampleNumber,
    color: color,
    form: form,
    lusture: lusture,
    streak: streak,
    hardness: hardness,
    cleavage: cleavage,
    fracture: fracture,
    specificGravity: specificGravity,
    chemicalComposition: chemicalComposition,
    diagnosticProperties: diagnosticProperties,
    name: name
  }

  console.log(mineral);

  process.exit();
}

main()