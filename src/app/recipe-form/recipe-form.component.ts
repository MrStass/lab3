import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {
  newRecipe = { name: '', ingredients: '' };

  @Output() recipeAdded = new EventEmitter<any>();  

  addRecipe() {

    console.log('Adding new recipe:', this.newRecipe);
    this.recipeAdded.emit(this.newRecipe);
    this.newRecipe = { name: '', ingredients: '' };

  }
}
