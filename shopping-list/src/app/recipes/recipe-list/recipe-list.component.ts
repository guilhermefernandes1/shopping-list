import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test.', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Hamburger Test', 'This is a hamburger test.', 'https://c.pxhere.com/photos/c3/a9/beef_bokeh_bottle_bread_buns_burger_calories_cheese-1552519.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
