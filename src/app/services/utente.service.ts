import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';
import { UtenteComponent } from '../components/utente/utente.component';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  apiBaseUrl = 'api/utente';

  constructor(private http: HttpClient,) { }

  
  insertUtente(utente: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`,utente);

}


datiUtente = new ReplaySubject();


  
}






 // insertUser(utente: any): Observable<Utente> {
  //   return this.http.post<Utente>(`${this.apiBaseUrl}/`, utente)

// }
