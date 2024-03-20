import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-swich',
  templateUrl: './swich.component.html',
  styleUrls: ['./swich.component.css']
})
export class SwichComponent {

    options = [
      {value: 'en', display: 'English'},
      {value: 'es', display: 'Español'}
    ]


  constructor(private translate: TranslateService){}

  onChange = (event: Event) =>{
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);

  }

}
