import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<any>();

  recipes = [
    { name: 'Mayonnaise', ingredients: ['3 eggs', 'Lemon juice', 'Mustard', '1 dash Cayenne pepper', '1 tsp Salt', '1 tsp Sugar'] },
    { name: 'Carbonara', ingredients: ['100g pancetta', '50g pecorino cheese', '50g parmesance', '3 large eggs', '350g spaghetti', '2 plump garlic cloves, peeled and left whole', '50g unsalted butter', 'sea salt and freshly ground black pepper'] },
    { name: 'Borsh', ingredients: ['Vegetables', 'Canned tomatoes', 'meat', 'Vegetable oil', 'Water', 'Garlic'] },
  ];

  showRecipeDetails(recipe: any) {
    this.recipeSelected.emit(recipe);
  }
}