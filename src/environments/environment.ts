// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyBMC2qRqSIvGZ786GgLlrH1szL_nM2BVVM",
    authDomain: "crud-web-prog.firebaseapp.com",
    databaseURL: "https://crud-web-prog.firebaseio.com",
    projectId: "crud-web-prog",
    storageBucket: "crud-web-prog.appspot.com",
    messagingSenderId: "441012925374"
  }
};
