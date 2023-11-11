const fs = require("fs");

(function () {
  const packageInfo = JSON.parse(fs.readFileSync("./package.json").toString() || "{}");
  const packageVersion = packageInfo.version;
  console.log(packageVersion);

  let [first, second, third] = packageVersion.split(".").map((verInfo) => parseInt(verInfo));
  third += 1;

  if (third > 9) {
    third = 0;
    second += 1;
  }

  if (second > 9) {
    second = 0;
    first += 1;
  }

  if (second > 9 && third > 9) {
    third = 0;
    second = 1;
    first += 1;
  }

  packageInfo.version = `${first}.${second}.${third}`;
  console.log(packageInfo);
  fs.writeFileSync("./package.json", JSON.stringify(packageInfo, null, 2));
})();
