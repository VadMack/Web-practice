import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../models/recipe.model";
import {ShoppingCartItem} from "../models/shopping-cart-item.model";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  id: number = 0;

  recipes: Recipe[] = [
    new Recipe("Banana",
      '1) Open banana\n' +
      '2) Eat banana',
      [new ShoppingCartItem("Banana", 1)],
      "./assets/img/banana.jpg"),
    new Recipe("Fried egg",
      '1) Fry the egg in a frying pan',
      [
        new ShoppingCartItem("Egg", 1),
        new ShoppingCartItem("Sunflower oil", 1)
      ],
      "./assets/img/egg.jpg"),
    new Recipe("Easy classic lasagne",
      'STEP 1\n' +
      'Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.\n' +
      'STEP 2\n' +
      'Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.\n' +
      'STEP 3\n' +
      'Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.\n' +
      'STEP 4\n' +
      'Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.\n' +
      'STEP 5\n' +
      'Put the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.',
      [
        new ShoppingCartItem("Olive oil", 1),
        new ShoppingCartItem("Rashers smoked streaky bacon", 2),
        new ShoppingCartItem("Tomato", 1),
        new ShoppingCartItem("Clear honey", 1),
        new ShoppingCartItem("Freshly grated parmesan", 1)
      ],
      "./assets/img/lasagne.jpeg"),
  ]


  constructor(private route: ActivatedRoute) {

    route.params.subscribe(
      params => {
        this.id = params['id']
      });

  }

  addItem(item: ShoppingCartItem): void {
    let existedItemsStr = localStorage.getItem('shopping-list');
    let existedItems;
    console.log(existedItemsStr)
    if (existedItemsStr) {
      existedItems = JSON.parse(existedItemsStr)
    } else {
      existedItems = []
    }

    existedItems.push(new ShoppingCartItem(item.name, item.amount))
    localStorage.setItem('shopping-list', JSON.stringify(existedItems))
  }

  ngOnInit(): void {
  }

}
