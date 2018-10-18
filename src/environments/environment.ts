// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB49yZ3b5fa4Vn3XMG9_J1RPvhaNeBcVjk',
    authDomain: 'urlamammia.firebaseapp.com',
    databaseURL: 'https://urlamammia.firebaseio.com',
    projectId: 'urlamammia',
    storageBucket: 'urlamammia.appspot.com',
    messagingSenderId: '572642450328'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
