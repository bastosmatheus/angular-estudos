import { Component, inject, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PointOfInterestService } from '../../services/point-of-interest.service';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  pointOfInterestService = inject(PointOfInterestService);

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    x: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    y: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
  });

  @Input() isModalOpen: boolean = false;

  createPointOfInterest() {
    const fieldName = this.form.controls['name'];
    const fieldX = this.form.controls['x'];
    const fieldY = this.form.controls['y'];

    if (this.form.valid) {
      const name = fieldName.value as string;
      const x = fieldX.value as number;
      const y = fieldY.value as number;

      const pointsOfInterest = this.pointOfInterestService
        .create(name, x, y)
        .subscribe((data) => {
          return data;
        });

      fieldName.reset();
      fieldX.reset();
      fieldY.reset();
    }
  }
}
