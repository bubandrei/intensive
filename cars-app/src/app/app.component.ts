import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cars-app';

  priceForm = this.fb.group({
    name:['', Validators.required],
    phone:['', Validators.required],
    car:['', Validators.required]
  })

  constructor(private fb:FormBuilder) {
  }

  goScroll(target: HTMLElement){
    target.scrollIntoView({behavior:"smooth"})
  };
  onSubmit(){
    if(this.priceForm.valid){
      alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
      this.priceForm.reset();
    }
  }
}
