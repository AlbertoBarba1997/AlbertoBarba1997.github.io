import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimacionService {

  constructor() { }

  animarGuay = (elementClass: string, animationName: string) => {
    // Creamos una promesa y la devolvemos
    return new Promise<void>((resolve, reject) => {
      const node = document.querySelector(elementClass) as HTMLElement;

      if (!node) {
        reject('Elemento no encontrado');
        return;
      }

      node.classList.add(animationName);

      // Cuando la animación termina, limpiamos las clases y resolvemos la promesa
      function handleAnimationEnd(event: AnimationEvent) {
        event.stopPropagation();
        node.classList.remove(animationName);
        resolve();
      }

      node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
  };
}
