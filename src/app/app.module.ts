import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsListsComponent } from './components/tutorials-lists/tutorials-lists.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialService } from './services/tutorial.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsListsComponent,
    TutorialDetailsComponent,
    AddTutorialComponent
  ],
  imports: [
    // Adding this fix NullInjectorError: No provider for HttpClient
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  // for Injectable ???
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
