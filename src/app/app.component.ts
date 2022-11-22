import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pastebin';
  code = `
  <script
    src="somescript.js"
  <script/>
  <script>
    const test = ''
    function logger(test) {
      console.log(test)
    }
  <script/>
`

}
