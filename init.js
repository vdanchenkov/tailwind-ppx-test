let fs = require("fs");

let emitBigFile = () => {
  let content = ["[@react.component]", "let make = () =>", "  <div>"];
  for (let i = 0; i < 100; i++) {
    content.push(
      `    <div className=[%tw "c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13"] />`
    );
  }

  content.push("  </div>;");
  return content.join("\n");
};
for (let x = 0; x < 10; x++) {
  if (!fs.existsSync(`src/${x}`)) {
    fs.mkdirSync(`src/${x}`);
  }

  for (let xx = 0; xx < 50; xx++) {
    fs.writeFileSync(`src/${x}/Test__${x}__${xx}.re`, emitBigFile());
  }
}
