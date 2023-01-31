import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public selectedFrameworks?: FormArray;
  ngOnInit() {}
  
  form: FormGroup;
  Frames: Array<any> = [
    { name: 'Angular', value: 'Angular' },
    { name: 'React', value: 'React' },
    { name: 'Vue', value: 'Vue' }
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      Escolhidos:  new FormArray([ 
     ]),
      observacoes:new FormControl()
    });
  }

  onCheckboxChange(event: any) {
    
    this.selectedFrameworks = (this.form.controls['Escolhidos'] as FormArray);
    if (event.target.checked) {
      this.selectedFrameworks.push(new FormControl(event.target.value));
    } else {
      const index = this.selectedFrameworks.controls
      .findIndex(x => x.value === event.target.value);
      this.selectedFrameworks.removeAt(index);
    }
  }

  submit() {
  
    var arrayControl = this.form.get('Escolhidos') as FormArray
    var stringControl = this.form.get('observacoes') as FormControl
    
    const parms= {
      escolhidos: arrayControl.value,
      stickers: this.valor,
      obs: stringControl.value
  
    };

    console.log(parms)
  }

  valor:number = 0; 

    decrementar(){
      this.valor -=1;      
    }
    acrescentar(){
      this.valor +=1;  
    }
}
