import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,NgForm } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular';
  formG: FormGroup;
  ngOnInit(){
    this.formG = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    });
    this.formG.get('firstName').statusChanges.subscribe
    (value => console.log(value));
  }
  onSubmit(f:NgForm) {
    console.log(f.value);
    console.log(f.valid);
  } 
  onSubmitReactive(){
    this.formG.controls.firstName.setErrors({'error1':true});
    this.formG.controls.firstName.setErrors({'error2':true});
    console.log(this.formG.controls.firstName);
    console.log(this.formG.controls.firstName.value+" "+this.formG.controls.lastName.value);
  }
}

