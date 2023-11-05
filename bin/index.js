#!/usr/bin/env node
const yargs = require("yargs");
const { tempGen , codeTempGen } = require("../src/temp-gen");

yargs
  .command({
    command: "create",
    describe: "Greet the user",
    builder: {
      "project-name": {
        describe: "Name of the person to greet",
        demandOption: true,
        type: "string",
      },
    },
    handler: tempGen,
  })
  .command({
    command: "init",
    describe: "Greet the user",
    builder: {
      "project-name": {
        describe: "Name of the person to greet",
        demandOption: true,
        type: "string",
      },
    },
    handler: tempGen,
  })
  .command({
    command: "genrate-template",
    describe:
      "It'll genrate the template base on what ui framework/ui you are using",
    builder: {
      "template-name": {
        describe: "Name of the person to greet",
        demandOption: true,
        type: "string",
      },
    },
    handler: codeTempGen
  })
  .help().argv;
