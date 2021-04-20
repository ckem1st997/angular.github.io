import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProductCategory } from 'src/app/models/IProductCategory';

@Component({
  selector: 'app-CreatePC',
  templateUrl: './CreatePC.component.html',
  styleUrls: ['./CreatePC.component.scss']
})
export class CreatePCComponent implements OnInit {
  createPC: IProductCategory;
  createForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      titleMeta: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    console.log(this.name?.errors)
    if (!this.createForm.invalid)
      this.createForm.value.name = 1
    else
      // sai dinh dang nhap
      this.createForm.value.name = 2
  }
  get name() { return this.createForm.get('name'); }
  get titleMeta() { return this.createForm.get('titleMeta'); }
}
