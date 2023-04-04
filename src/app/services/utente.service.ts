import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
datiUtente = new Subject();


  constructor() { }
}
