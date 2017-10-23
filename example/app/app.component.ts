import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {EssenceNg2EditorComponent} from "../../src/essence-ng2-editor.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild(EssenceNg2EditorComponent) editor: EssenceNg2EditorComponent;

	model_text: string = '<span style="color: red;">测试文本！</span>';

	constructor (public changeDetectorRef: ChangeDetectorRef) {
	}

	ngOnInit () {
	}

	contentChange ($event) {
		this.changeDetectorRef.detectChanges(); // 手动触发一次
		console.log("contentChange：", $event);
	}

	editorReady ($event) {
		console.log("ready：", $event);
	}

	setHeight (height: number): void {
		this.editor.setHeight(height);
	}

	setContent (): void {
		this.model_text = '<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2 (已修改)</a></p>';
	}
}
