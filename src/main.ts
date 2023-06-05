import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Apxor from 'apxor';
import CE from "apxor-qe";
import ApxorRTM from "apxor-rtm";

Apxor.init("b0bf1fc7-b104-4e92-9cc5-590fcb685c29", {
  plugins: ["ApxorRTM"],
  deps: [ApxorRTM, CE],
  version: "<YOUR_WEBSITE_VERSION>", // Optional
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
