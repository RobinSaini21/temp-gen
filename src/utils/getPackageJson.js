const path = require("path");
const fs = require("fs");



function getPackageJson(dirPath, depth) {
  const packageJsonPath = path.join(dirPath, "package.json");
  
  if (fs.existsSync(packageJsonPath)) {
    return packageJsonPath;
  }

  if (depth <= 0) {
    return null;
  }

  const parentDir = path.dirname(dirPath);
  if(parentDir === dirPath){
    return null;
  }

  return getPackageJson(parentDir, depth - 1);
}

 
module.exports = {
    getPackageJson
}