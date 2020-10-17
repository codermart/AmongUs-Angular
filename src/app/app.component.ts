import { Component, OnInit } from '@angular/core';
import { Category } from './model/category';
import { Crewmate } from './model/crewmate';
import { StoreService } from './service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  categories: Category[] = [];
  selectedCategory: Category;
  crewmate = new Crewmate();
  selectedItemId: number;

  /**
   *
   */
  constructor(private store: StoreService) {
  }

  ngOnInit(): void {
    this.categories = this.store.getCategories();
    this.selectedCategory = this.categories[0];

    this.selectedItemId = 1;

    this.crewmate.background = this.categories[0].items[0];
    this.crewmate.body = this.categories[1].items[0];
    this.crewmate.hat = this.categories[2].items[0];
    this.crewmate.dress = this.categories[3].items[0];
    this.crewmate.pet = this.categories[4].items[0];


  }

  onItemClicked = (itemId) => {
    this.crewmate[this.selectedCategory.key] = this.selectedCategory.items.find(i => i.id === itemId);
    this.crewmate = {...this.crewmate};
  }

  onCategoryClicked = (categoryId) => {
    this.selectedCategory = this.categories.find(t => t.id === categoryId);
    this.selectedItemId = this.crewmate[this.selectedCategory.key].id;
  }
}
