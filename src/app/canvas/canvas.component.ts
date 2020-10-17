import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { from } from 'rxjs';

import { Crewmate } from '../model/crewmate';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements AfterViewInit, OnInit {
  @ViewChild('crewmateCanvas')
  crewmateCanvas: ElementRef<HTMLCanvasElement>;

  private context: CanvasRenderingContext2D;
  @Input('crewmate') crewmate: Crewmate;
  private images = {};

  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.context = this.crewmateCanvas.nativeElement.getContext('2d');
  }

  loadImagesToCanvas = () => {
    this.context.clearRect(0,0,600,600);
    for (let key in this.images) {
      let x = 0;
      let y = 0;
      
      if(key === "pet")
      {
        x -= 50;
      }

      this.context.drawImage(this.images[key], x, y);
    }
  };

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.drawCrewmate();
  }

  drawCrewmate = () => {
    for (let key in this.crewmate) {
      const url = this.crewmate[key].url;
      this.images[key] = new Image();
      this.images[key].onload = () => {
        this.loadImagesToCanvas();
      };
      this.images[key].src = url;
    }
  };
}
