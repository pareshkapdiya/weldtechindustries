// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { DEFAULT_APP_DATA } from '../config/app-data';

export const environment = {
  production: false,

  commonTitle: 'Weld Tech Industries',
  ApiURL: 'http://localhost:8080/api',
  config: DEFAULT_APP_DATA,
  siteKey: '6Ld6SKsUAAAAAO3pfRtffmZLym318cHYi2R0-DlQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
