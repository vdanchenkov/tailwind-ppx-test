let fs = require("fs");

let emitReactFile = () => {
  let content = ["[@react.component]", "let make = () =>", "  <div>"];
  for (let i = 0; i < 2; i++) {
    content.push(
      `    <div className=[%tw "c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13"] />`
    );
  }

  content.push("  </div>;");
  return content.join("\n");
};

let emitVarsFile = () => {
  let content = [];
  for (let i = 0; i < 10; i++) {
    content.push(
      ` let cn_${i} = [%tw "c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13"];`
    );
  }
  return content.join("\n");
};

for (let x = 0; x < 100; x++) {
  fs.writeFileSync(`src/Test__${x}.re`, emitVarsFile());
}
