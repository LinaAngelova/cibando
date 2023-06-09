import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Observable, take, map } from 'rxjs';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy{
@Input() pag: string;
@Output() messaggio = new EventEmitter();

recipes: Recipe[];

ricetteTotali: number;
page = 1;
ricettePerPagina = 4;

//esempio pipe asincrona
// recipes$ = this.recipeService.getRecipes().pipe(
//   map(res => this.ricette = res),
// );

// ricette: Recipe[];


constructor(private recipeService: RecipeService,){}

ngOnInit(): void {
  this.prendiRicette();
}

ngOnDestroy(): void {
  console.log('utente uscito dal componente')
}

prendiRicette(){
  this.recipeService.getRecipes().pipe(take(1)).subscribe({
    next: (res) => {
      this.recipes = res;

      if(this.pag){
        this.recipes= this.recipes.sort((a,b) => b._id - a._id).slice (0,4);
      }

      this.ricetteTotali = res.length;
    },
    error: (error) => {
      console.log(error)
    }
  })
}


inviaTitolo(titolo: string){
  this.messaggio.emit(titolo);
}

paginate(event) {
event.page = event.page + 1;
this.page = event.page;
}

}