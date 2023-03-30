import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent {

form= new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.maxLength(6)]),
  ripetiPassword: new FormControl('', Validators.required),
  accetto: new FormControl('', Validators.requiredTrue),
})

onSubmit(){
  console.log(this.form.value)

  }

}
