import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CusomValidator } from './customValidator';
import { UtenteService } from 'src/app/services/utente.service';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent implements OnInit {

  constructor(
    private utenteService: UtenteService,
    private router: Router,
    private config: PrimeNGConfig,
    private  modalService: NgbModal,
  
  ){}

  ngOnInit(){
    this.config.setTranslation({
      weak: 'povera',
      medium: 'forte',
      passwordPrompt: 'scrivi una password',
    });
  }

form= new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
  ripetiPassword: new FormControl('', Validators.required),
  accetto: new FormControl('', Validators.requiredTrue),
},
[CusomValidator.MatchValidator('password', 'ripetiPassword')]
);

onSubmit(){
  // console.log(this.form.value);
  const user = {
    name: this.form.value.name,
    email: this.form.value.email
  }

  this.utenteService.datiUtente.next (user);
  this.router.navigate(['home']);

  }


  open(content: any, titolo?: string){
    let title = titolo;
    this.modalService.open(content, {ariaLabelledBy: 'modale servizi', size: 'lg', centered: true}).result.then((res) => {
      console.log('azione da eseguire')

    }).catch((res) => {
      console.log('nessuna azione da eseguire')

    });
  }



}
