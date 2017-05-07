import {Component, ElementRef, ViewChild} from '@angular/core';
import {EssenceNg2EditorComponent} from "../../src/essence-ng2-editor.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild('editor') editor: EssenceNg2EditorComponent;

	model_text: string = '<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2</a></p>';

	constructor () {
	}

	ngOnInit () {
	}

	contentChange ($event) {
		console.log("contentChange：", $event);
	}

	editorReady ($event) {
		console.log("ready：", $event);
	}

	setHeight (height: number): void {
		this.editor.setHeight(height);
	}

	setContent (): void {
		this.editor.setContent('<p style="font-weight: bold;"><a href="http://ueditor.baidu.com/website/index.html" target="_blank" title="去UEditor官网">UEditor Component for Angular2 (已修改)</a></p>');
	}

	test (text: string): void {
		console.log(text);
	}
}
