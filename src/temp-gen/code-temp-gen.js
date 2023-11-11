const path = require("path");
const fs = require("node:fs");
const { getPackageJson } = require("./../utils");
const { LocalStorage } = require("node-localstorage");
const { ANGULAR_TEMPLATE } = require("./../consts")

const projectConfigStroage = new LocalStorage("./project-configs");
const mainModuleDir = process.cwd();



function codeTempGen(argv){

const FILE_NAME = argv?.["template-name"];
const packageJsonPath = getPackageJson(mainModuleDir, mainModuleDir.split("\\").lenght); 
if(packageJsonPath === null){
    return;
}
const projectCofigJson = fs.readFileSync(packageJsonPath).toString();
const pathToJsonConfig =  packageJsonPath.split("\\").join("-");

const cachedConfig = projectConfigStroage.getItem(pathToJsonConfig);

if(!cachedConfig){
    projectConfigStroage.setItem(pathToJsonConfig,projectCofigJson);
};
const projectConfigCached = JSON.parse(projectConfigStroage.getItem(pathToJsonConfig));

if(projectConfigCached?.dependencies?.["@angular/core"]){
 for (const key in ANGULAR_TEMPLATE) {

   fs.writeFileSync(`${FILE_NAME}.component.${ANGULAR_TEMPLATE[key]?.extension}`,ANGULAR_TEMPLATE[key]?.genrateFun(FILE_NAME))
 }
};

}

module.exports = {
    codeTempGen: codeTempGen
}