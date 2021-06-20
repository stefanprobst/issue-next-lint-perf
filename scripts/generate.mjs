import * as fs from "fs";
import * as path from "path";

function range(n) {
  return Array.from(Array(n).keys());
}

const componentFolder = path.join(process.cwd(), "src", "components");

function main() {
  if (!fs.existsSync(componentFolder)) {
    fs.mkdirSync(componentFolder, { recursive: true });
  }

  range(1000).forEach((i) => {
    const componentName = `Component${i + 1}`;
    const filePath = path.join(componentFolder, `${componentName}.tsx`);

    const tens = Math.floor(i / 10);

    const components = range(10)
      .filter((j) => j !== i % 10)
      .map((j) => {
        const n = tens * 10 + (j + 1);
        return `Component${n}`;
      });

    const imports = components
      .map((importName) => {
        return `import { ${importName} } from '@/components/${importName}'`;
      })
      .join("\n");

    const component = `${imports}

export function ${componentName}(): JSX.Element {
  return (
    <>
${components.map((name) => `${" ".repeat(6)}<${name} />`).join("\n")}
    </>
  )
}`;

    fs.writeFileSync(filePath, component, { encoding: "utf-8" });
  });

  console.log("Successfully generated components.");
}

main();
