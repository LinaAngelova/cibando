import { Component } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';

@Component({
  selector: 'app-nuova-ricetta',
  templateUrl: './nuova-ricetta.component.html',
  styleUrls: ['./nuova-ricetta.component.scss']
})
export class NuovaRicettaComponent {

  ricettaInserita: any;

    form = new FormGroup({
    title: new FormControl (``, Validators.required),
    description: new FormControl (``, Validators.required),
    image: new FormControl (``, Validators.required),
    difficuly: new FormControl (``, Validators.required),
    published: new FormControl (``),
  })

  constructor (
    private router: Router,
    private recipeService: RecipeService
    ){}

    onSubmit(){
// console.log(this.form.value)
const recipe = this.form.value;
this.recipeService.insertRecipe(recipe).pipe(take(1)).subscribe({
  next: (res) =>{
    console.log(res);
    this.ricettaInserita = res;
  },
  error: (error) => {
    console.log (error)
  
  }
    });

  }
  onClose(){
    this.ricettaInserita = '';
    this.router.navigate(['ricette']);
  }

  onNewRecipe(){
    this.ricettaInserita = '';
    this.form.patchValue({
      title: '',
      description:'',
      image: '',
      difficuly: '',
      published: ''

    })
  }
}