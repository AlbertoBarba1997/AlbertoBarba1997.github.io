import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { AnimacionService } from 'src/app/services/animacion.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  text = "Java Developer | Experienced in large-scale team projects.";
  typewriterText = "";
  index = 0;
  speed = 35;
  intervalSubscription: Subscription | null = null;

  constructor(private animacionService: AnimacionService) {}

  ngOnInit(): void {

    this.intervalSubscription = interval(this.speed).pipe(
      map(() => this.index++),
      takeWhile(() => this.index <= this.text.length)
    ).subscribe(() => {
      this.typewriterText = this.text.slice(0, this.index);
    });

    //animación avatar inicial
    this.animacionService.animarGuay('.info-foto', 'animate__backInRight')
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  flipear():void{
    this.animacionService.animarGuay('.info-foto', 'animate__flip')
  }
}
