import {ShoppingCartItem} from "./shopping-cart-item.model";

export class Recipe {
  name: string
  steps: string;
  ingredients: ShoppingCartItem[];
  imagePath: string;


  constructor(name: string, steps: string, ingredients: ShoppingCartItem[], imagePath: string) {
    this.name = name;
    this.steps = steps;
    this.ingredients = ingredients;
    this.imagePath = imagePath;
  }
}
