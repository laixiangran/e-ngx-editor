import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENgxEditorModule } from '../../src/e-ngx-editor.module';

@NgModule({
	imports: [
		BrowserModule,
		ENgxEditorModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
