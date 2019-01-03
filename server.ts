import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';
import { join } from 'path';

enableProdMode();

const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require('./apps/gamehall-server/main');

app.engine('html', (_: any, options: any, callback: any) =>
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
      provideModuleMap(LAZY_MODULE_MAP),
      {
        provide: REQUEST,
        useValue: options.req
      },
      {
        provide: RESPONSE,
        useValue: options.req.res
      }
    ]
  })(_, options, callback)
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'apps/gamehall-browser'));

app.get(
  '*.*',
  express.static(join(DIST_FOLDER, 'apps/gamehall-browser'), {
    maxAge: '1y'
  })
);

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
