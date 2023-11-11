const ANGULAR_TEMPLATE = {
  ANGULAR_HTML: {
    genrateFun: (name = "random") => `<p>${name} works!</p>`,
    extension: "html",
  },
  ANGULAR_TS: {
    genrateFun: (name = "random") => `import { Component } from '@angular/core';

    @Component({
      selector: 'app-${name}',
      templateUrl: './super-man.component.html',
      styleUrls: ['./super-man.component.scss']
    })
    export class ${name.split("-").join("").toUpperCase()}Component {
    
    }
    `,
    extension: "ts",
  },
  ANGULAR_SCSS: {
    genrateFun: (name = "randome") => `\n`,
    extension: "scss",
  },
};

const REACT_TEMPLATE = {
  REACT_JSX: {
    genrateFun: (name = "random") => `import React from 'react';
    
    function ${name}() {
      return <h1>Hello, ${name}</h1>;
    }
    `,
  },
};

module.exports = {
  ANGULAR_TEMPLATE: ANGULAR_TEMPLATE,
};
