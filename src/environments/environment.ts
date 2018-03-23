// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDSmNCNad0MrcOAJtXQ0j5Hlt_psIzXuiA",
    authDomain: "ngecom-webismore.firebaseapp.com",
    databaseURL: "https://ngecom-webismore.firebaseio.com",
    projectId: "ngecom-webismore",
    storageBucket: "ngecom-webismore.appspot.com",
    messagingSenderId: "673864478515"
  }
};
