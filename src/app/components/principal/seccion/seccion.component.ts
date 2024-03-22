import { Component, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {

  @Input() name?: string;

  ngOnInit() {
    AOS.init();
  }

}
