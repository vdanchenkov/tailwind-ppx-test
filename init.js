let fs = require("fs");

let emitBigFile = () => {
  let content = ["[@react.component]", "let make = () =>", "  <div>"];
  for (let i = 0; i < 100; i++) {
    content.push(
      `    <div className=[%tw "c1 c2 c3 c4 c5 c6 c7 c8 c9 c10"] />`
    );
  }

  content.push("  </div>;");
  return content.join("\n");
};

for (let i = 0; i < 500; i++) {
  fs.writeFileSync(`src/Test_${i}.re`, emitBigFile());
}
