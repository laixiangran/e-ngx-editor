/**
 * Created by laixiangran on 2016/11/29.
 * homepage：http://www.laixiangran.cn.
 */

import {NgModule} from '@angular/core';
import {EssenceNg2EditorComponent} from "./essence-ng2-editor.component";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [
		FormsModule
	],
    declarations: [EssenceNg2EditorComponent],
    exports: [FormsModule, EssenceNg2EditorComponent]
})
export class EssenceNg2EditorModule {
}
