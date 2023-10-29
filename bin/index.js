#!/usr/bin/env node
const yargs = require("yargs");
const { tempGen } = require("../src/temp-gen");

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
  .help().argv;
