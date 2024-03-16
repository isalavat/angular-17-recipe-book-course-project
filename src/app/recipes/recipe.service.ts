import { Recipe } from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a sipmly a test',
      'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a sipmly a test',
      'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
