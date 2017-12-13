/**
 * Created by laixiangran on 2016/11/29.
 * homepage：http://www.laixiangran.cn.
 */

import { NgModule } from '@angular/core';
import { ENgxEditorComponent } from './e-ngx-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		FormsModule
	],
	declarations: [ENgxEditorComponent],
	exports: [FormsModule, ENgxEditorComponent]
})
export class ENgxEditorModule {
}
