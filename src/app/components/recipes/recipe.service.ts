import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test', 'https://www.maxpixel.net/static/photo/1x/Pizza-Icon-Pizza-Emblem-Pizza-Slice-Slice-Of-Pizza-1428929.png'),
    new Recipe('A test Recipe', 'This is simple a test', 'https://www.maxpixel.net/static/photo/1x/Pizza-Icon-Pizza-Emblem-Pizza-Slice-Slice-Of-Pizza-1428929.png'),
    new Recipe('A test Recipe', 'This is simple a test', 'https://www.maxpixel.net/static/photo/1x/Pizza-Icon-Pizza-Emblem-Pizza-Slice-Slice-Of-Pizza-1428929.png')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}