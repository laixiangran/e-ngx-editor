import { Component, ViewChild } from '@angular/core';
import { ENgxEditorComponent } from '../../src/e-ngx-editor.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild(ENgxEditorComponent) editor: ENgxEditorComponent;

	model_text: string = '<span style="color: red;">测试文本！</span>';

	constructor() {
	}

	ngOnInit() {
	}

	contentChange($event) {
		console.log('contentChange：', $event);
	}

	editorReady($event) {
		console.log('ready：', $event);
	}

	setHeight(height: number): void {
		this.editor.setHeight(height);
	}

	setContent(): void {
		this.model_text = '<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2 (已修改)</a></p>';
	}
}
