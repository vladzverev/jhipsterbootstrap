import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { AppModule } from './app.module';

ProdConfig();

platformBrowserDynamic().bootstrapModule(AppModule);
