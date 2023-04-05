import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
datiUtente = new ReplaySubject();


  constructor() { }
}
