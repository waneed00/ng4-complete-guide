import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simple a test', 'https://www.maxpixel.net/static/photo/1x/Pizza-Icon-Pizza-Emblem-Pizza-Slice-Slice-Of-Pizza-1428929.png'),
    new Recipe('A test Recipe', 'This is simple a test', 'https://www.maxpixel.net/static/photo/1x/Pizza-Icon-Pizza-Emblem-Pizza-Slice-Slice-Of-Pizza-1428929.png'),
    new Recipe('A test Recipe', 'This is simple a test', 'https://www.maxpixel.net/static/photo/1x/Pizza-Icon-Pizza-Emblem-Pizza-Slice-Slice-Of-Pizza-1428929.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
