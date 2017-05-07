import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EssenceNg2EditorModule} from "../../src/essence-ng2-editor.module";

@NgModule({
    imports: [
        BrowserModule,
		EssenceNg2EditorModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
