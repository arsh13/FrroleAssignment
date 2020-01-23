import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CurrentStructureComponent } from './current-structure/current-structure.component';
import { AddFolderComponent } from './add-folder/add-folder.component';
import { DeleteFolderComponent } from './delete-folder/delete-folder.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentStructureComponent,
    AddFolderComponent,
    DeleteFolderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
