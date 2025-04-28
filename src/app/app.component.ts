import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PointOfInterestService } from './services/point-of-interest.service';
import { PointOfInterest } from './types/point-of-interest.type';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  pointOfInterestService = inject(PointOfInterestService);
  name = 'Matheus';
  idButton = 'new-id';
  pointsOfInterest: PointOfInterest[] = [];

  ngOnInit(): void {
    this.pointOfInterestService.getAll().subscribe((data) => {
      this.pointsOfInterest = data;
    });
  }

  updateName(event: unknown) {
    this.name = 'Matheus123';
  }

  printHello() {
    console.log(`Hello, ${this.name}!`);
  }
}
