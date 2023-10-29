const inquirer = require("inquirer");
const { exec } = require("child_process");
const { MENU_OPTIONS } = require("../consts");

function tempGen(argv) {
  const PROJECT_NAME = argv?.["project-name"];
  function promptHandler(menuOptions) {
    inquirer.prompt(menuOptions).then((answers) => {
      if (
        answers instanceof Object &&
        Array.isArray(answers?.menuSelection?.subMenuOptions?.choices || {})
      ) {
        promptHandler(answers.menuSelection.subMenuOptions);
      } else {
        if (answers?.menuSelection instanceof Function) {
          exec(
            answers?.menuSelection(PROJECT_NAME)?.toLowerCase(),
            (error, stdout, stderr) => {
              if (error) {
                console.error(error.message);
                return;
              }
              if (stderr) {
                console.error(stderr);
                return;
              }
              console.log(stdout);
            }
          );
        } else {
          exec(answers?.menuSelection, (error, stdout, stderr) => {
            if (error) {
              console.error(error.message);
              return;
            }
            if (stderr) {
              console.error(stderr);
              return;
            }
            console.log(stdout);
          });
        }
      }
    });

    return null;
  }

  promptHandler(MENU_OPTIONS);
}

module.exports = {
  tempGen,
};
