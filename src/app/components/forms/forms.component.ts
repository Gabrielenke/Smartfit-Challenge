import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  filteredResults: number[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}

  ngOnInit() {
    this.unitService.getAllUnits().subscribe((data) => {
      console.log(data);
    });
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false,
    });
  }

  onSubmit(): void {
    console.log('Your form data : ', this.formGroup.value);
  }

  onClean(): void {
    this.formGroup.reset();
  }
}
