
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { BrowserModule } from '@angular/platform-browser'; // Importa BrowserModule

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
