import { Component } from '@angular/core';
import * as AOS from 'aos';



@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent {
  ngOnInit() {
    AOS.init();
  }
}
