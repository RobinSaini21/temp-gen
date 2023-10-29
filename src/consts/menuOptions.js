const chalk = require("chalk");

const MENU_OPTIONS = [
  {
    type: "list",
    name: "menuSelection",
    message: "Select an option:",
    choices: [
      {
        name: chalk.yellow("vanilla"),
        value: (projectName = "my-react-app") =>
          `npm init vite@latest ${projectName} -- --template vanilla`,
      },
      {
        name: chalk.blueBright("vanilla-ts"),
        value: (projectName = "my-react-app") =>
          `npm init vite@latest ${projectName} -- --template vanilla-ts`,
      },
      {
        name: chalk.blue("React"),
        value: {
          subMenuOptions: {
            type: "list",
            name: "menuSelection",
            message: "Select an option:",
            choices: [
              {
                name: chalk.yellow("Javascript"),
                value: (projectName = "my-react-app") =>
                  `npm init vite@latest ${projectName} -- --template react`,
              },
              {
                name: chalk.blueBright("TypeScript"),
                value: (projectName = "my-react-app") =>
                  `npm init vite@latest ${projectName} -- --template react-ts`,
              },
            ],
          },
        },
      },
      {
        name: chalk.green("Vue"),
        value: {
          subMenuOptions: {
            type: "list",
            name: "menuSelection",
            message: "Select an option:",
            choices: [
              {
                name: chalk.yellow("Javascript"),
                value: (projectName = "my-react-app") =>
                  `npm init vite@latest ${projectName} -- --template vue`,
              },
              {
                name: chalk.blueBright("TypeScript"),
                value: (projectName = "my-react-app") =>
                  `npm init vite@latest ${projectName} -- --template vue-ts`,
              },
            ],
          },
        },
      },
    ],
  },
];

module.exports = {
  MENU_OPTIONS,
};
