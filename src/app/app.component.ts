import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedRecipe: any;
  recipes: any[] = [];  

  onRecipeSelected(recipe: any) {
    this.selectedRecipe = recipe;
  }

  onRecipeAdded(recipe: any) {
    this.recipes.push(recipe);
  }
}