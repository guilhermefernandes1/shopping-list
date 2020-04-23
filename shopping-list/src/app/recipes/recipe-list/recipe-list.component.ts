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
    new Recipe('Hamburger Test', 'This is a hamburger test.', 'https://pixnio.com/free-images/2017/07/27/2017-07-27-15-31-07-900x600.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
